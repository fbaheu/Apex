import { fail, success } from '@apex/throw-less';
import { NoteSchema, NOTE_COLLECTION_NAME, type Note, type WithAttributesAndId } from '@apex/core/collections';

import type { DispatchContext } from '~interfaces';

/**
 * [ACTION] createNewNote
 * @description Create a new note inside the given storage.
 * @example
 * <caption>Example usage of **createNewNote** method.</caption>
 *
 * ```typescript tsx
 * await createNewNote(ctx);
 * ```
 *
 */
export async function createNewNote(ctx: DispatchContext, content: Note['content'] = []) {
  const newNoteParsing = NoteSchema({ content });

  if (newNoteParsing instanceof Error) {
    return fail(new Error('TODO'));
  }

  const newNote: Omit<Note, keyof WithAttributesAndId> = {
    content,
    categories: [],
    is_favorite: false,
    is_pinned: false,
  };

  const result = await ctx.db.create<Note>(NOTE_COLLECTION_NAME, newNote);

  if (result.isFail()) {
    return fail(new Error('TODO'));
  }

  if (result.isSuccess()) {
    // Do some shit here
    return success(result.at(1));
  }

  return result;
}
