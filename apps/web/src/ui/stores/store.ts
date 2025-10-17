import { create, type StateCreator } from 'zustand';

export function createStore<State extends { refresh(): Promise<void> }>(storeBuilder: StateCreator<State>) {
  return create<State>(storeBuilder);
}
