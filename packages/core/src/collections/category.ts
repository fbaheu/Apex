import { type } from 'arktype';

import type { Prettify } from '~interfaces';

import { DocumentIdSchema, generateId } from './document-id';
import type { WithAttributesAndId } from './base-document-attributes';

/**
 * CONSTANT
 */
export const CATEGORY_COLLECTION_NAME = 'category';

/**
 * [INTERFACE]
 */
export type BaseCategory = typeof CategorySchema.infer;

export type Category = Prettify<WithAttributesAndId<BaseCategory>>;

/**
 * [SCHEMA] CategorySchema
 * @description Schema for validating a category.
 */
export const CategorySchema = type({
  id: DocumentIdSchema.default(generateId()),
  parent_id: type(DocumentIdSchema).optional(),
  icon: type('string').optional(),
  color: type('string.hex').optional(),
  label: 'string>0'
});
