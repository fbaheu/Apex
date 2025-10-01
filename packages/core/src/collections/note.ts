import { type } from 'arktype';

import { Prettify } from '~interfaces';

import { DocumentIdSchema, generateId } from './document-id';
import { BaseDocumentAttributesWithId } from './base-document-attributes';

/**
 * CONSTANT
 */
export const NOTE_COLLECTION_NAME = 'note';

/**
 * INTERFACE
 */
export type BaseNote = typeof NoteSchema.infer;

export type Note = Prettify<BaseNote & BaseDocumentAttributesWithId>;

/**
 * [SCHEMA] NoteSchema
 * @description Schema for validating a note.
 */
export const NoteSchema = type({
  id: DocumentIdSchema.default(generateId()),
  is_pinned: 'boolean',
  is_favorite: 'boolean',
  content: 'unknown[]',
  categories: type(DocumentIdSchema).array(),
});
