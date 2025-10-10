import { fail, success } from '@apex/throw-less';
import { CategorySchema, CATEGORY_COLLECTION_NAME, type Category, type WithAttributesAndId } from '@apex/core/collections';

import type { DispatchContext } from '~interfaces';

/**
 * [ACTION] createNewCategory
 * @description Create a new category inside the given storage.
 * @example
 * <caption>Example usage of **createCategory** method.</caption>
 *
 * ```typescript tsx
 * await createCategory(ctx, { label: 'react' });
 * ```
 *
 */
export async function createNewCategory(ctx: DispatchContext, category: Omit<Category, keyof WithAttributesAndId>) {
  const newCategoryParsing = CategorySchema(category);

  if (newCategoryParsing instanceof Error) {
    return fail(new Error('TODO'));
  }

  const result = await ctx.db.create<Category>(CATEGORY_COLLECTION_NAME, category);

  if (result.isFail()) {
    return fail(new Error('TODO'));
  }

  if (result.isSuccess()) {
    // Do some shit here
    return success(result.at(1));
  }

  return result;
}
