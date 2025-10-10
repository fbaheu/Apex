import { type } from 'arktype';

import type { DocumentId } from './document-id';

/**
 * INTERFACE
 */
export type WithAttributes<T = {}> = T & typeof BaseDocumentAttributesSchema.infer;

export type WithAttributesAndId<T = {}> = T & WithAttributes<{ id: DocumentId }>;

/**
 * [SCHEMA] BaseDocumentSchema
 * @description Schema for validating common document's attributes.
 */
export const BaseDocumentAttributesSchema = type({
  created_at: 'string.date',
  updated_at: 'string.date',
  archived_at: 'string.date',
});
