import { Dispatcher } from './dispatcher';

import { fetchAllNotes } from '~actions/fetch-all-notes';
import { createNewNote } from '~actions/create-new-note';
import { fetchNoteDetail } from '~actions/fetch-note-detail';
import { updateNoteContent } from '~actions/update-note-content';

import { createNewCategory } from '~actions/create-new-category';
import { fetchAllCategories } from '~actions/fetch-all-categories';

export const { useDispatcher } = Dispatcher()
  // 'categories' related actions
  .register('create-new-category', createNewCategory)
  .register('fetch-all-categories', fetchAllCategories)

  // 'notes' related actions
  .register('create-new-note', createNewNote)
  .register('fetch-note-detail', fetchNoteDetail)
  .register('fetch-all-notes', fetchAllNotes)
  .register('update-note-content', updateNoteContent);

export const globalDispatcher = useDispatcher();
