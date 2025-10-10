import { Dispatcher } from './dispatcher';

import { createNewNote } from '~actions/create-new-note';
import { fetchNoteDetail } from '~actions/fetch-note-detail';

import { createNewCategory } from '~actions/create-new-category';
import { fetchAllCategories } from '~actions/fetch-all-categories';

export const { useDispatcher } = Dispatcher()
  // 'categories' related actions
  .register('create-new-category', createNewCategory)
  .register('fetch-all-categories', fetchAllCategories)

  // 'notes' related actions
  .register('create-new-note', createNewNote)
  .register('fetch-note-detail', fetchNoteDetail);

export const globalDispatcher = useDispatcher();
