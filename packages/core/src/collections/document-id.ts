import { type } from 'arktype';
import { nanoid } from 'nanoid';

/**
 * INTERFACE
 */
export type DocumentId = typeof DocumentIdSchema.infer;

/**
 * [SCHEMA] DocumentIdS
 * @description Schema for validating document IDs.
 */
export const DocumentIdSchema = type(/^apx-[\w_-]{21}/);

/**
 * [UTILS] generateId
 * @description Generate a unique identifier for a given document.
 * @example
 * <caption>Example usage of **generateId** method.</caption>
 *
 * ````typescript tsx
 * const id = generateId();
 *
 * console.log(id), // 'apx-CfY7_ZPeRSMJ8ZM0rTd3A'
 * ```
 *
 */
export function generateId(): string {
  return `apx-${nanoid()}`;
}

/**
 * [SHARED] isDocumentId
 * @description Validate given id is document id.
 * @example
 * <caption>Example usage of **isDocumentId** method.</caption>
 *
 * ```typescript tsx
 * const id = 'apx-CfY7_ZPeRSMJ8ZM0rTd3A';
 * const notId = 'CfY7_ZPeRSMJ8ZM0rTd3A';
 *
 * console.log(isDocumentId(id)), // true
 * console.log(isDocumentId(notId)), // false
 * ```
 *
 */
export function isDocumentId(
  documentId: unknown,
): documentId is DocumentId {
  const out = DocumentIdSchema(documentId);

  if (out instanceof Error) {
    return false;
  }

  return true;
}
