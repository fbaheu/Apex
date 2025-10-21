import { fail } from '@apex/throw-less';
import { DEFAULT_PARAGRAPH } from '@apex/peak-editor';
import { NoteSchema, NOTE_COLLECTION_NAME, ParsingError, type Note, type WithAttributesAndId } from '@apex/core/collections';

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
export async function createNewNote(ctx: DispatchContext, content: Note['content'] = DEFAULT_PARAGRAPH) {
  const newNoteParsing = NoteSchema.partial()({ content });

  if (newNoteParsing instanceof ParsingError) {
    return fail(new Error('TODO'));
  }

  const newNote: Omit<Note, keyof WithAttributesAndId> = {
    content,
    categories: [],
    is_favorite: false,
    is_pinned: false,
  };

  return ctx.db.create<Note>(NOTE_COLLECTION_NAME, newNote);
}
