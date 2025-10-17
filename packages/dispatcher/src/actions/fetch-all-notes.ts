import { success } from '@apex/throw-less';
import { type Note, NOTE_COLLECTION_NAME } from '@apex/core/collections';

import type { DispatchContext } from '~interfaces';

/**
 * [ACTION] fetchAllNotes
 * @description Retrieve all notes inside from the given storage.
 * @example
 * <caption>Example usage of **fetchAllNotes** method.</caption>
 *
 * ```typescript tsx
 * await fetchAllNotes(ctx);
 * ```
 *
 */
export async function fetchAllNotes(ctx: DispatchContext) {
  const result = await ctx.db.all<Note>(NOTE_COLLECTION_NAME);

  if (result.isFail()) {
    return success([]);
  }

  if (result.isSuccess()) {
    // Do some shit here
    return success(result.unwrap());
  }

  return result;
}
