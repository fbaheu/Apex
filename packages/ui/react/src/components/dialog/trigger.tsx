import type React from 'react';
import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';

/**
 * INTERFACE
 */
export interface DialogTriggerProps {
  children: React.ComponentProps<typeof BaseDialog.Trigger>['render'];
}

/**
 * [COMPONENT] Dialog - Trigger
 * @description Trigger element for dialog content.
 * @example
 * <caption>Example usage of **Trigger** component.</caption>
 *
 * ```typescript jsx
 * const MyComponent = () => {
 *  return (
 *    <Dialog>
 *      <Trigger>
 *        <Button>Trigger dialog !</Button>
 *      </Trigger>
 *      ...
 *    </Dialog>
 *  );
 * };
 * ```
 *
 */
export const Trigger: React.FunctionComponent<DialogTriggerProps> = ({
  children,
}) => {
  return <BaseDialog.Trigger render={children} />;
};
