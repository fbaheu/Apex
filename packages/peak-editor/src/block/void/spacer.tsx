import type { JSX } from 'react';
import { DefaultElement, type RenderElementProps } from 'slate-react';

import { Box } from '@apex/design-system/jsx';

import type { CustomLeafElement } from '~leaf';
import { css } from '@apex/design-system/css';

export interface SpacerElement {
  type: 'spacer';
  space?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: Array<CustomLeafElement>;
}

export const Spacer = (props: RenderElementProps): JSX.Element => {
  if (props.element.type !== 'spacer') {
    return <DefaultElement {...props} />;
  }

  const getSpaceValue = () => {
    switch (props.element.space) {
      case 'none':
        return css({ pb: 'none' });
      case 'xs':
        return css({ pb: '0.5' });
      case 'sm':
        return css({ pb: '1' });
      case 'lg':
        return css({ pb: '3' });
      case 'xl':
        return css({ pb: '4' });
      case 'md':
      default:
        return css({ pb: '2' });
    }
  };

  return (
    <Box
      contentEditable={false}
      className={getSpaceValue()}
      {...props.attributes}
    >
      {props.children}
    </Box>
  );
};
