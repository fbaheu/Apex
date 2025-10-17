import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';

import { Trigger } from './trigger';
import { Content } from './content';
import { CloseButton } from './close';

/**
 * [COMPONENT] Dialog
 * @description Dialog component.
 * @example
 * <caption>Example usage of **Dialog** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <Dialog>
 *      <Dialog.Trigger>
 *        <Button>Trigger dialog !</Button>
 *      </Dialog.Trigger>
 *      <Dialog.Content>
 *        Dialog content
 *      </Dialog.Content>
 *    </Dialog>
 *  );
 * };
 * ```
 *
 */
export const Dialog = Object.assign(BaseDialog.Root, {
  Trigger,
  Content,
  Close: CloseButton,
});
