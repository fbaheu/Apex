/// <reference types="./editor" />

import React from 'react';
import { withHistory } from 'slate-history';
import { withReact, Slate, Editable, ReactEditor } from 'slate-react';
import { createEditor, Editor, Element, Path, Transforms, type Descendant } from 'slate';

import { Leaf } from '~leaf';
import { Block } from '~block';
import { decorate } from '~decorate';
import { withSpacer, withStructure } from '~plugins';

/**
 * CONSTANTS
 */
export const DEFAULT_PARAGRAPH: Array<Descendant> = [
  {
    type: 'heading',
    level: 'title',
    children: [{ text: '' }]
  },
  {
    type: 'separator',
    children: [{ text: '' }]
  },
  {
    type: 'spacer',
    space: 'xl',
    children: [{ text: '' }]
  },
  {
    type: 'paragraph',
    children: [{ text: '' }]
  }
];

/**
 * INTERFACE
 */
export interface PeakEditorProps {
  editor?: Editor;
  defaultEditorValue?: Array<unknown>;
  onEditorChange(change: Array<unknown>): void;
}

/**
 * [EDITOR] Peak Editor
 * @description Entry point of editor.
 * @example
 * <caption>Example usage of **Peak** component.</caption>
 *
 * ```typescript tsx
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
export const PeakEditor: React.FunctionComponent<PeakEditorProps> = ({
  editor = createEditor(),
  defaultEditorValue = DEFAULT_PARAGRAPH,
  onEditorChange,
}) => {
  // [MEMO] Persist across render 'editor' state
  const withEditor = React.useMemo(() => withSpacer(withStructure(withHistory(withReact(editor)))), []);
  // [MEMO] Persist across render 'Leaf' instance
  const renderLeaf = React.useMemo(() => Leaf, []);
  // [MEMO] Persist across render 'Element / Block' instance
  const renderElement = React.useMemo(() => Block, []);

  return (
    <Slate
      editor={withEditor}
      initialValue={defaultEditorValue as Array<Descendant>}
      onChange={onEditorChange}
    >
      <Editable
        renderLeaf={renderLeaf}
        renderElement={renderElement}
        decorate={decorate(withEditor)}
        onKeyDown={(event) => {
          // SHIFT + ENTER → insère un saut de ligne
          if (event.key === 'Enter' && event.shiftKey) {
            event.preventDefault();
            withEditor.insertText('\n');
            return;
          }
        }}
      />
    </Slate>
  );
};
