import { type } from 'arktype';

import { DocumentId } from './document-id';

/**
 * INTERFACE
 */
export type BaseDocumentAttributes = typeof BaseDocumentAttributesSchema.infer;

export type BaseDocumentAttributesWithId = BaseDocumentAttributes & { id: DocumentId };

/**
 * [SCHEMA] BaseDocumentSchema
 * @description Schema for validating common document's attributes.
 */
export const BaseDocumentAttributesSchema = type({
  created_at: 'string.date',
  updated_at: 'string.date',
  archived_at: 'string.date',
});
