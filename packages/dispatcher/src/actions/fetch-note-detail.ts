import { fail, success } from '@apex/throw-less';
import { type Note, NOTE_COLLECTION_NAME } from '@apex/core/collections';

import type { DispatchContext } from '~interfaces';

/**
 * [ACTION] fetchNoteDetail
 * @description Retrieve currently active note inside from the given storage.
 * @example
 * <caption>Example usage of **fetchNoteDetail** method.</caption>
 *
 * ```typescript tsx
 * await fetchNoteDetail(ctx, 'apx-CfY7_ZPeRSMJ8ZM0rTd3A');
 * ```
 *
 */
export async function fetchNoteDetail(ctx: DispatchContext, noteId: Note['id']) {
  const result = await ctx.db.one<Note>(NOTE_COLLECTION_NAME, noteId);

  if (result.isFail()) {
    return fail(new Error('TODO'));
  }

  if (result.isSuccess()) {
    // Do some shit here
    return success(result.at(1));
  }

  return result;
}
