import { Editor, Range, Element, type DecoratedRange, type NodeEntry, range } from 'slate';

/**
 * [EDITOR] decorate
 * @description Decore method used to add the placeholder to each empty lines.
 * @example
 * <caption>Not needed.</caption>
 */
export function decorate(editor: Editor) {
  return ([node, path]: NodeEntry) => {
    const ranges = [];

    void editor.children.length;

    if (
      path.length === 1
      && Element.isElement(node)
      && Editor.isBlock(editor, node)
      && Editor.string(editor, [path[0] ?? 0]) === ''
      && node.type === 'heading'
      && node.level === 'title'
    ) {
      ranges.push({
        anchor: { path: [...path, 0, 0], offset: 0 },
        focus: { path: [...path, 0, 0], offset: 0 },
        is_title: true,
        is_placeholder: true,
      });
    }

    if (editor.selection) {
      if (
        !Editor.isEditor(node)
        && Editor.string(editor, [path[0] ?? 0]) === ''
        && Range.includes(editor.selection, path)
        && Range.isCollapsed(editor.selection)
      ) {
        ranges.push({
          ...editor.selection,
          is_placeholder: true,
        });
      }
    }

    return ranges;
  };
}
