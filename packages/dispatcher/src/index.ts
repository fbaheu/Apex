import { Dispatcher } from './dispatcher';

import { createNewCategory } from '~actions/create-new-category';
import { fetchAllCategories } from '~actions/fetch-all-categories';

export const { useDispatcher } = Dispatcher()
  .register('create-new-category', createNewCategory)
  .register('fetch-all-categories', fetchAllCategories);
