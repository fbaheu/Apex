import { fail, success } from '@apex/throw-less';
import { NOTE_COLLECTION_NAME, NoteSchema, ParsingError, type Note } from '@apex/core/collections';

import type { DispatchContext } from '~interfaces';

/**
 * [ACTION] updateNoteContent
 * @description Update the content of a single note.
 * @example
 * <caption>Example usage of **updateNoteContent** method.</caption>
 *
 * ```typescript tsx
 * await updateNoteContent(ctx, 'apx-CfY7_ZPeRSMJ8ZM0rTd3A', []);
 * ```
 *
 */
export async function updateNoteContent(ctx: DispatchContext, noteId: Note['id'], content: Note['content']) {
  const noteUpdateParsing = NoteSchema.partial()({ content });

  if (noteUpdateParsing instanceof ParsingError) {
    return fail(new Error('TODO'));
  }

  const result = await ctx.db.update<Note>(NOTE_COLLECTION_NAME, noteId, { content });

  if (result.isFail()) {
    return fail(new Error('TODO'));
  }

  if (result.isSuccess()) {
    // Do some shit here
    return success(result.unwrap());
  }

  return result;
}
