import { success } from '@apex/throw-less';
import { type Category, CATEGORY_COLLECTION_NAME } from '@apex/core/collections';

import { DispatchContext } from '~interfaces';

/**
 * [ACTION] fetchAllCategories
 * @description Retrieve all categories inside from the given storage.
 * @example
 * <caption>Example usage of **fetchAllCategories** method.</caption>
 *
 * ```typescript tsx
 * await fetchAllCategories(ctx);
 * ```
 *
 */
export async function fetchAllCategories(ctx: DispatchContext) {
  const result = await ctx.db.all<Category>(CATEGORY_COLLECTION_NAME);

  if (result.isSuccess()) {
    // Do some shit here
    return success(result.at(1));
  }

  return result;
}
