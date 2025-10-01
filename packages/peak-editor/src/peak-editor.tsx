import React from 'react';
import { withHistory } from 'slate-history';
import { withReact, Slate, Editable } from 'slate-react';
import { createEditor, Editor, type Descendant } from 'slate';

/**
 * CONSTANTS
 */
export const DEFAULT_PARAGRAPH: Array<Descendant> = [
  {
    children: [{ text: '' }]
  }
];

/**
 * INTERFACE
 */
export interface PeakEditorProps {
  editor?: Editor;
  defaultEditorValue?: Array<Descendant>;
  onEditorChange(change: Array<Descendant>): void;
}

/**
 * [EDITOR] Peak Editor
 * @description Entry point of editor.
 * @example
 * <caption>Example usage of **Peak** component.</caption>
 *
 * ```typescript jsx
 * const MyComponent = () => {
 *  return (
 *   <Peak
 *    editor={createEditor()}
 *    defaultEditorValue={[{ type: 'Paragraph', children: [{ text: '' }] }]}
 *    onEditorChange={console.log}
 *   />
 *  );
 * };
 * ```
 *
 */
export const PeakEditor: React.FunctionComponent<Readonly<PeakEditorProps>> = ({
  editor = createEditor(),
  defaultEditorValue = [],
  onEditorChange,
}) => {
  // [MEMO] Persist across render 'editor' state
  const withEditor = React.useMemo(() => withHistory(withReact(editor)), []);

  return (
    <Slate
      editor={withEditor}
      initialValue={defaultEditorValue}
      onChange={onEditorChange}
    >
      <Editable
      // renderLeaf={renderLeaf}
      // decorate={decorate(withEditor)}
      />
    </Slate>
  );
};
