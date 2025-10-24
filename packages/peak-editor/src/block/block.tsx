import type { JSX } from 'react';
import { type RenderElementProps } from 'slate-react';

import { Paragraph, Heading, type ParagraphElement, type HeadingElement } from './element';
import { Spacer, Separator, type SpacerElement, type SeparatorElement } from './void';

export type CustomBlockElement
  // Void elements
  = | SpacerElement
    | SeparatorElement
  // Block elements
    | ParagraphElement
    | HeadingElement;

export const Block = (props: RenderElementProps): JSX.Element => {
  switch (props.element.type) {
    // Void elements
    case 'spacer':
      return <Spacer {...props} />;
    case 'separator':
      return <Separator {...props} />;
    case 'heading':
      return <Heading {...props} />;
    default:
      return <Paragraph {...props} />;
  }
};
