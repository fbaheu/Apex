import type { JSX } from 'react';
import { DefaultElement, type RenderElementProps } from 'slate-react';

import { Divider } from '@apex/design-system/jsx';

import type { CustomLeafElement } from '~leaf';

export interface SeparatorElement {
  type: 'separator';
  children: Array<CustomLeafElement>;
}

export const Separator = (props: RenderElementProps): JSX.Element => {
  if (props.element.type !== 'separator') {
    return <DefaultElement {...props} />;
  }

  return (
    <Divider
      borderColor="border.subtle"
      contentEditable={false}
      {...props.attributes}
    >
      {props.children}
    </Divider>
  );
};
