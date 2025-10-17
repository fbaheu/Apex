import { globalDispatcher } from '@apex/dispatcher';
import type { Category } from '@apex/core/collections';

import { createStore } from './store';

interface CategoryStoreState {
  categories: Array<Category>;
  refresh(): Promise<void>;
}

export const categoryStore = createStore<CategoryStoreState>((set, get) => ({
  categories: [],
  async refresh() {
    const result = await globalDispatcher.dispatch('fetch-all-categories');

    if (result.isSuccess()) {
      set({ categories: result.unwrap() });
    }
  },
}));
