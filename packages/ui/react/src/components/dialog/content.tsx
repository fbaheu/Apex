import type React from 'react';
import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';

import { HStack, VStack } from '@apex/design-system/jsx';

import { Span } from '~components/styled-semantic-tag';

import { Popup } from './popup';
import { Backdrop } from './backdrop';
import { CloseButton } from './close';

/**
 * INTERFACE
 */
export interface DialogContentProps
  extends Omit<React.ComponentProps<typeof Popup>, 'title'> {
  title: React.ComponentProps<typeof BaseDialog.Title>['render'];
  description?: React.ComponentProps<typeof BaseDialog.Description>['render'];
}

/**
 * [COMPONENT] Dialog / Content
 * @description Content of dialog.
 * @example
 * <caption>Example usage of **Content** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *  <Dialog>
 *      ...
 *      <Content>
 *        dialog content
 *      </Content>
 *    </Dialog>
 *  );
 * };
 * ```
 *
 */
export const Content: React.FunctionComponent<DialogContentProps> = ({
  title,
  children,
  description,
  ...props
}) => {
  return (
    <BaseDialog.Portal>
      <Backdrop />
      <Popup {...props}>
        <VStack
          px="6"
          gap="1"
          w="full"
          alignItems="start"
        >
          <HStack
            p="0"
            w="full"
            alignItems="center"
            fontWeight="medium"
            textStyle="paragraph-lg"
            justifyContent="space-between"
          >
            <BaseDialog.Title render={title} />
            <CloseButton />
          </HStack>
          {description && (
            <Span
              p="0"
              fontWeight="normal"
              color="text.tertiary"
              textStyle="caption-lg"
            >
              <BaseDialog.Description render={description} />
            </Span>
          )}
        </VStack>
        {children}
      </Popup>
    </BaseDialog.Portal>
  );
};
