import type { JSX } from 'react';
import { DefaultElement, type RenderElementProps } from 'slate-react';

import type { CustomLeafElement } from '~leaf';

export interface ParagraphElement {
  type: 'paragraph';
  alignment?: 'left' | 'right' | 'center' | 'justify';
  children: Array<CustomLeafElement>;
}

export const Paragraph = (props: RenderElementProps): JSX.Element => {
  if (props.element.type !== 'paragraph') {
    return <DefaultElement {...props} />;
  }

  return (
    <p
      style={{
        position: 'relative',
        whiteSpace: 'pre-wrap',
        textAlign: props.element.alignment ?? 'justify'
      }}
      data-slate-element-type={props.element.type}
      {...props.attributes}
    >
      {props.children}
    </p>
  );
};
