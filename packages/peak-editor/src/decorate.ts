import { Editor, Range, type DecoratedRange, type NodeEntry } from 'slate';

/**
 * [EDITOR] decorate
 * @description Decore method used to add the placeholder to each empty lines.
 * @example
 * <caption>Not needed.</caption>
 */
export function decorate(editor: Editor) {
  return ([node, path]: NodeEntry) => {
    if (editor.selection) {
      if (
        !Editor.isEditor(node)
        && Editor.string(editor, [path[0] ?? 0]) === ''
        && Range.includes(editor.selection, path)
        && Range.isCollapsed(editor.selection)
      ) {
        return [
          {
            ...editor.selection,
            placeholder: true,
          },
        ];
      }
    }

    return [];
  };
}
