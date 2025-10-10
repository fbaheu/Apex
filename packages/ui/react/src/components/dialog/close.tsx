import type React from 'react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';
import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';

import { IconButton } from '~components/button';
import { Icon } from '~components/icon';

/**
 * INTERFACE
 */
export type DialogCloseProps = Omit<React.ComponentProps<typeof IconButton>, 'children'>;

/**
 * [COMPONENT] Dialog - Close
 * @description Close element for dialog content.
 * @example
 * <caption>Example usage of **Close** component.</caption>
 *
 * ```typescript jsx
 * const MyComponent = () => {
 *  return (
 *    <Dialog>
 *      <Close>
 *        <Button>Close dialog !</Button>
 *      </Close>
 *      ...
 *    </Dialog>
 *  );
 * };
 * ```
 *
 */
export const Close: React.FunctionComponent<DialogCloseProps> = (props) => {
  return (
    <BaseDialog.Close
      render={(
        <IconButton {...props}>
          <Icon
            size="sm"
            icon={Cancel01Icon}
          />
        </IconButton>
      )}
    />
  );
};
