import { globalDispatcher } from '@apex/dispatcher';
import type { Note } from '@apex/core/collections';

import { createStore } from './store';

interface CategoryStoreState {
  notes: Array<Note>;
  refresh(): Promise<void>;
}

export const noteStore = createStore<CategoryStoreState>((set, get) => ({
  notes: [],
  async refresh() {
    const result = await globalDispatcher.dispatch('fetch-all-notes');

    if (result.isSuccess()) {
      set({ notes: result.unwrap() });
    }
  },
}));
