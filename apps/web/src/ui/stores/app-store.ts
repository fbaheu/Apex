import { createStore } from './store';
import { noteStore } from './note-store';
import { categoryStore } from './category-store';

interface AppStoreState {
  init(): Promise<void>;
  refresh(): Promise<void>;
}

export const appStore = createStore<AppStoreState>(set => ({
  async init() {
    await this.refresh();
  },
  async refresh() {
    await noteStore.getState().refresh();
    await categoryStore.getState().refresh();
  },
}));
