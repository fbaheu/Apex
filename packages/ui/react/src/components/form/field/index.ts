import { Label } from './label';

import { Field as BaseField } from './field';

/**
 * [COMPONENT] Field
 * @description Define a field element with given label.
 * @example
 * <caption>Example usage of **Field** component.</caption>
 *
 * ```typescript jsx
 * const MyComponent = () => {
 *  return (
 *    <Field>
 *      <Field.Label>
 *        ...
 *      </Field.Label>
 *      <Field.Message>
 *        ...
 *      </Field.Message>
 *    </Field>
 *  );
 * };
 * ```
 *
 */
export const Field = Object.assign(BaseField, { Label });
