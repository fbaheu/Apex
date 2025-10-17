import { fail, fromThrowable } from '@apex/throw-less';
import IndexeddbPlugin from '@apex/plugin-indexeddb-storage';

import { isFn } from '~utils/is-fn';
import type { Fn, DispatcherBuilder, DispatchContext } from '~interfaces';

/**
 * [UTILS] Dispatcher
 * @description Create a register of all available actions.
 * @example
 * <caption>Example usage of **Dispatcher** method.</caption>
 *
 * ```ts
 * const { useDispatcher } = Dispatcher()
 *  .register('sync-no-arg', () => {})
 *  .register('sync-with-arg', (a: string) => {})
 *  .register('sync-with-arg-and-return', (a: string) => 'test')
 *  .register('async-no-arg', async () => {})
 *  .register('async-with-arg', async (a: string) => {})
 *  .register('async-with-arg-and-return', async (a: string) => 'test');
 *
 * const { dispatch } = useDispatcher();
 *
 * dispatch('sync-no-arg');
 * dispatch('sync-with-arg', '');
 * dispatch('sync-with-arg-and-return', '');
 * dispatch('async-no-arg');
 * dispatch('async-with-arg', '');
 * dispatch('async-with-arg', '');
 * ```
 *
 */
export function Dispatcher(): DispatcherBuilder {
  // Store where all actions are registered
  const actionsStore: Map<string, Fn> = new Map();

  // TODO: Good for now but should be more dynamic
  IndexeddbPlugin.init();

  return {
    /**
     * [UTILS] register
     * @description Register a new action inside store.
     * @example
     * <caption>See below ⬆️</caption>
     */
    register(action, actionFn) {
      if (!action || !isFn(actionFn)) {
        throw new Error('An action must be provided.');
      }

      if (actionsStore.has(action)) {
        throw new Error(`Action named '${action}' already exist.`);
      }

      // console.info(`Register '${action}' inside action store.`);

      actionsStore.set(action, actionFn);

      return this;
    },
    /**
     * [HOOKS] useDispatcher
     * @description Hook which simplify usage of dispatcher.
     * @example
     * <caption>See below ⬆️</caption>
     */
    useDispatcher() {
      return {
        /**
         * [UTILS] dispatch
         * @description Dispatch and execute an action (can't be called outside a component).
         * @example
         * <caption>See below ⬆️</caption>
         */
        dispatch(actionName, ...actionArgs) {
          if (!actionsStore.has(actionName)) {
            // console.warn(`No action named '${actionName}' were found.`);
            return fail();
          }

          const actionFn = actionsStore.get(actionName);

          if (!actionFn) {
            // console.warn(`No action named '${actionName}' were found.`);
            return fail();
          }

          const ctx: DispatchContext = {
            db: IndexeddbPlugin,
          };

          return actionFn(ctx, ...actionArgs);
        },
      };
    },
  };
}
