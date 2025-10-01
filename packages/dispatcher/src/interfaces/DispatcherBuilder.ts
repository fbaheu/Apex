import type { Storage } from '@apex/core/storage';

import type { FnAction } from './Fn';

/**
 * INTERFACE
 */
export interface DispatchContext {
  db: Storage;
}

export type DispatcherBuilder<Actions = object> = {
  register<ActionName extends string, ActionFunction extends FnAction>(
    actionName: Exclude<ActionName, keyof Actions>,
    actionFn: ActionFunction,
  ): DispatcherBuilder<Omit<Actions, ActionName> & Record<ActionName, ActionFunction>>;
  useDispatcher(): {
    dispatch<ActionName extends keyof Actions>(
      actionName: ActionName,
    // @ts-expect-error - Can't satisfy Callable since Actions is 'object'
      ...actionArgs: Parameters<Actions[ActionName]> extends [
        unknown,
        ...infer Rest,
      ]
        ? Rest
        : []
    // @ts-expect-error - Can't satisfy Callable since Actions is 'object'
    ): CallableTupleResult<ReturnType<Actions[ActionName]>>;
  };
};
