import type React from 'react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';
import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';

import { Icon } from '~components/icon';
import { IconButton } from '~components/button';

/**
 * INTERFACE
 */
export type DialogCloseProps = Omit<React.ComponentProps<typeof IconButton>, 'children'>;

/**
 * [COMPONENT] Dialog - Close
 * @description Close button element for dialog content.
 * @example
 * <caption>Example usage of **Close** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <Dialog>
 *      <CloseButton />
 *      ...
 *    </Dialog>
 *  );
 * };
 * ```
 *
 */
export const CloseButton: React.FunctionComponent<DialogCloseProps> = (props) => {
  return (
    <BaseDialog.Close
      render={(
        <IconButton
          size="sm"
          variant="ghost"
          {...props}
        >
          <Icon
            size="xs"
            icon={Cancel01Icon}
          />
        </IconButton>
      )}
    />
  );
};
