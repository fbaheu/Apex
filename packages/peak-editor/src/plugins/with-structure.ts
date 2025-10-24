import { Editor, Transforms, Path, Element as SlateElement, Range, Element } from 'slate';
import { ReactEditor } from 'slate-react';
import type { HeadingElement } from '~block/element';

import type { SeparatorElement } from '~block/void';

export const withStructure = (editor: Editor) => {
  const { normalizeNode, deleteBackward, deleteFragment, isVoid, insertBreak } = editor;

  editor.isVoid = element =>
    (SlateElement.isElement(element)
      && (element.type === 'separator' || element.type === 'spacer'))
    || isVoid(element);

  editor.insertBreak = () => {
    const [headingEntry] = Editor.nodes(editor, {
      match: n => Element.isElement(n) && n.type === 'heading' && n.level === 'title',
    });

    if (headingEntry) {
      const headingPath = headingEntry[1];
      const insertPath = Path.next(headingPath);

      // Insère le paragraphe directement sous le heading
      Transforms.insertNodes(editor, {
        type: 'paragraph',
        children: [{ text: '' }],
      }, { at: [3] });

      Transforms.select(editor, Editor.start(editor, [3]));
      ReactEditor.focus(editor);

      return;
    }

    insertBreak();
  };

  // Normalisation : heading puis separator toujours présents
  editor.normalizeNode = (entry) => {
    const [node, path] = entry;

    if (Editor.isEditor(node)) {
      if (node.children.length === 0 || node.children[0].type !== 'heading') {
        const heading = {
          type: 'heading',
          level: 'title',
          children: [{ text: '' }],
        };
        Transforms.insertNodes(editor, heading, { at: [0] });
        return;
      }

      if (node.children.length < 2 || node.children[1].type !== 'separator') {
        const separator = { type: 'separator', children: [{ text: '' }] };
        Transforms.insertNodes(editor, separator, { at: [1] });
        return;
      }
    }

    normalizeNode(entry);
  };

  // -------------------------
  // deleteBackward override
  // Empêche suppression qui essaierait d'effacer le heading entier (quand on est au début de celui-ci)
  // -------------------------
  editor.deleteBackward = (unit) => {
    const { selection } = editor;

    if (!selection) {
      return deleteBackward(unit);
    }

    const { anchor } = selection;
    const [node, path] = Editor.node(editor, anchor, { depth: 1 }); // bloc courant

    // 🛑 Cas 1 : au tout début du heading -> on bloque
    if (
      anchor.path[0] === 0 // premier bloc
      && anchor.offset === 0
      && SlateElement.isElement(node)
      && node.type === 'heading'
    ) {
      return; // on bloque la suppression dans le heading
    }

    // ✅ Cas 2 : si ce n’est pas le heading, on laisse Slate gérer normalement
    deleteBackward(unit);
  };

  // -------------------------
  // deleteFragment override
  // - bloque si la sélection touche le separator (index 1)
  // - si la sélection touche le heading (index 0) : on remplace le heading par un heading vide (on ne supprime pas le noeud)
  // - sinon délègue
  // -------------------------
  editor.deleteFragment = () => {
    const { selection } = editor;
    if (!selection) return deleteFragment();

    // Récupère les noeuds racine touchés par la sélection (mode highest pour top-level)
    const nodesInSelection = Array.from(
      Editor.nodes(editor, { at: selection, mode: 'highest' })
    );

    // si la sélection touche le separator (index 1) -> bloquer
    const touchesSeparator = nodesInSelection.some(([n, p]) => p[0] === 1);

    if (touchesSeparator) {
      return;
    }

    // si la sélection touche le heading (index 0) -> vider le heading (remplacer par un heading vide)
    const touchesHeading = nodesInSelection.some(([n, p]) => p[0] === 0);

    if (touchesHeading) {
      // Retirer le heading existant puis en réinsérer un vide à la même position.
      // On utilise withoutNormalizing pour que ça reste atomique.
      Editor.withoutNormalizing(editor, () => {
        try {
          Transforms.removeNodes(editor, { at: [0] });
        }
        catch (e) {
          // si removeNodes échoue (s'il n'existe pas), on ignore
        }
        Transforms.insertNodes(
          editor,
          { type: 'heading', children: [{ text: '' }] },
          { at: [0] }
        );
        // replacer la sélection dans le heading vide au début
        Transforms.select(editor, { path: [0, 0], offset: 0 });
      });
      return;
    }

    // sinon comportement par défaut
    deleteFragment();
  };

  return editor;
};
