import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';

import { styled } from '@apex/design-system/jsx';

/**
 * [COMPONENT] Dialog - Backdrop
 * @description Backdrop element for dialog content.
 * @example
 * <caption>Example usage of **Trigger** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <Dialog>
 *      <Backdrop />
 *      ...
 *    </Dialog>
 *  );
 * };
 * ```
 *
 */
export const Backdrop = styled(BaseDialog.Backdrop, {
  base: {
    p: '4',
    inset: '0',
    background: 'color-mix(in srgb, token(colors.fg), transparent token(opacity.90))',
    outline: 'unset',
    position: 'fixed',
    overflow: 'clip',
    display: 'flex',
    zIndex: 'overlay',

    backdropFilter: 'blur(1px)',

    _open: {
      animation: 'backdrop-in',
    },

    _closed: {
      animation: 'backdrop-out',
    },
  },
});
