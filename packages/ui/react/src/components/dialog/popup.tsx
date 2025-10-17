import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';

import { styled } from '@apex/design-system/jsx';

/**
 * [COMPONENT] Dialog - Popup
 * @description Popup content of dialog.
 * @example
 * <caption>Example usage of **Popup** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <Popup>
 *      content
 *    </Popup>
 *  );
 * };
 * ```
 *
 */
export const Popup = styled(BaseDialog.Popup, {
  base: {
    py: '6',
    gap: '4',
    bgColor: 'bg',
    display: 'flex',
    fontFamily: 'token(fonts.display), token(fonts.mono)',
    flexDirection: 'column',
    outline: 'unset',
    overflow: 'clip',
    borderRadius: 'xl',
    boxShadow: 'sm',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.subtle',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 'modal',
    transitionProperty: 'opacity, transform',
    transitionDuration: 'fast',
    animationFillMode: 'both',
    willChange: 'transform, opacity',

    '&[data-starting-style], &[data-ending-style]': {
      opacity: '0',
      transform: 'translate(-50%, -50%) scale(0.9)',
    },
  },
});
