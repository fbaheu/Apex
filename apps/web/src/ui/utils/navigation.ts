import { redirect } from '@tanstack/react-router';

import type { DocumentId } from '@apex/core/collections';
import type { STATIC_CATEGORY } from '@apex/core/collections/category';

export function redirectToCategory(category: typeof STATIC_CATEGORY[keyof typeof STATIC_CATEGORY] | DocumentId) {
  return redirect({ to: '/$categoryId', params: { categoryId: category } });
};
