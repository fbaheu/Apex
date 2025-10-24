import type { JSX } from 'react';
import { DefaultElement, type RenderElementProps } from 'slate-react';

import { css } from '@apex/design-system/css';

import type { CustomLeafElement } from '~leaf';

export interface HeadingElement {
  type: 'heading';
  level?: 'title' | 'h1' | 'h2' | 'h3' | 'h4';
  children: Array<CustomLeafElement>;
}

export const Heading = (props: RenderElementProps): JSX.Element => {
  if (props.element.type !== 'heading') {
    return <DefaultElement {...props} />;
  }

  const getHeadingLevel = () => {
    switch (props.element.level) {
      case 'h1':
        return css({ py: '1', position: 'relative', textStyle: 'heading-2' });
      case 'h2':
        return css({ py: '1', position: 'relative', textStyle: 'heading-2' });
      case 'h3':
        return css({ py: '1', position: 'relative', textStyle: 'heading-3' });
      case 'h4':
        return css({ py: '1', position: 'relative', textStyle: 'heading-4' });
      default:
        return css({ position: 'relative', textStyle: 'heading-1', pt: '7', pb: '3' });
    }
  };

  return (
    <div className={getHeadingLevel()}>
      <div
        style={{ position: 'relative' }}
        data-slate-element-type={props.element.type}
        {...props.attributes}
      >
        {props.children}
      </div>
    </div>
  );
};
