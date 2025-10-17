import { type } from 'arktype';

export const ParsingError = type.errors;

export { NoteSchema, NOTE_COLLECTION_NAME, type Note } from './note';
export { CategorySchema, CATEGORY_COLLECTION_NAME, type Category } from './category';
export { generateId, isDocumentId, DocumentIdSchema, type DocumentId } from './document-id';
export { BaseDocumentAttributesSchema, type WithAttributes, type WithAttributesAndId } from './base-document-attributes';
