import { Editor, Transforms, Node, Element as SlateElement } from 'slate';

export const withSpacer = (editor: Editor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = (entry) => {
    const [node, path] = entry;

    if (Editor.isEditor(node)) {
      for (let i = 0; i < node.children.length - 1; i++) {
        const current = node.children[i];
        const next = node.children[i + 1];

        const currentIsBlock
          = SlateElement.isElement(current) && Editor.isBlock(editor, current);
        const nextIsBlock
          = SlateElement.isElement(next) && Editor.isBlock(editor, next);

        if (!currentIsBlock || !nextIsBlock) continue;

        const isHeadingToSeparator
          = current.type === 'heading' && next.type === 'separator';

        const alreadySpacerBetween
          = current.type === 'spacer' || next.type === 'spacer';

        const isSeparatorToParagraph
          = current.type === 'separator' && next.type === 'paragraph';

        const isParagraphToSeparator
          = current.type === 'paragraph' && next.type === 'separator';

        // 👉 Conditions où on veut insérer un spacer :
        // - entre deux blocs "normaux" (non spacer)
        // - entre un separator et un paragraph
        // - entre un paragraph (ou autre block) et un separator
        // mais jamais entre heading et separator
        if (
          !isHeadingToSeparator
          && !alreadySpacerBetween
          && (isSeparatorToParagraph || isParagraphToSeparator || next.type !== 'separator')
        ) {
          const spacer = { type: 'spacer', space: isSeparatorToParagraph ? 'xl' : 'md', children: [{ text: '' }] };
          Transforms.insertNodes(editor, spacer, { at: [i + 1] });
          return;
        }
      }
    }

    normalizeNode(entry);
  };

  return editor;
};
