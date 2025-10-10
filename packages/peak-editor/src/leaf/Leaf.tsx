import type { JSX } from 'react';
import type { BaseText } from 'slate';
import { DefaultLeaf, type RenderLeafProps } from 'slate-react';

import { InlineCode } from '@apex/react/inline-code';
import { Span } from '@apex/react/styled-semantic-tag';

import type { Format } from './format';

/**
 * INTERFACE
 */
export type CustomLeafElement = Partial<Record<Format, boolean>> & BaseText;

/**
 * [EDITOR] Leaf
 * @description Editor Leaf, represent basic styled element such as bold, italic, etc.
 * @example
 * <caption>Not needed.</caption>
 */
export const Leaf = (props: RenderLeafProps): JSX.Element => {
  if (props.leaf.bold) {
    props.children = <strong>{props.children}</strong>;
  }

  if (props.leaf.italic) {
    props.children = <em>{props.children}</em>;
  }

  if (props.leaf.underlined) {
    props.children = <u>{props.children}</u>;
  }

  if (props.leaf.strike_through) {
    props.children = <s>{props.children}</s>;
  }

  if (props.leaf.inline_code) {
    props.children = <InlineCode>{props.children}</InlineCode>;
  }

  if (props.leaf.subscript) {
    props.children = <sub>{props.children}</sub>;
  }

  if (props.leaf.superscript) {
    props.children = <sup>{props.children}</sup>;
  }

  if (props.leaf.placeholder) {
    return (
      <>
        <DefaultLeaf {...props} />
        <Span
          top="0"
          opacity="30"
          userSelect="none"
          position="absolute"
          contentEditable={false}
        >
          Type
          {' '}
          <InlineCode children="/" />
          {' '}
          to open menu
        </Span>
      </>
    );
  }

  return <DefaultLeaf {...props} />;
};
