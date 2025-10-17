import { Field as BaseField } from '@base-ui-components/react/field';

import { styled } from '@apex/design-system/jsx';

/**
 * [COMPONENT] Field
 * @description Define a field component wich encapsulate a label and his control (input, checkbox, etc).
 * @example
 * <caption>Example usage of **Field** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <Field>
 *      ...
 *    </Field>
 *  );
 * };
 * ```
 *
 */
export const Field = styled(BaseField.Root, {
  base: {
    gap: '2.5',
    display: 'flex',
    flexDirection: 'column',
  },
});
