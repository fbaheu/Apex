import React from 'react';
import { CircleIcon } from '@hugeicons/core-free-icons';

import { For } from '@apex/react/for';
import { Menu } from '@apex/react/menu';
import { Span } from '@apex/react/styled-semantic-tag';
import { HStack, Grid, VStack } from '@apex/design-system/jsx';

import { categoryStore } from '~ui/stores/category-store';
import { CreateCategoryButton } from '~ui/features/category-view/create';
import { CategoryListDisplayButton } from '~ui/features/category-view/list';

import { CategoryItem } from '~ui/features/category-view';

/**
 * [COMPONENT] NavigationSidebarCategories
 * @description Define the categories list.
 * @example
 * <caption>Example usage of **NavigationSidebarCategories** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <NavigationSidebarCategories  />
 *  );
 * };
 * ```
 *
 */
export const NavigationSidebarCategories: React.FunctionComponent = () => {
  const categories = categoryStore(s => s.categories);

  return (
    <Grid
      gap="6"
      gridTemplateRows="min-content auto"
    >
      <HStack
        px="3"
        gap="1"
        alignItems="center"
        justifyContent="space-between"
        id="navigation-sidebar-header"
      >
        <Span
          textStyle="caption-lg"
          color="text.placeholder"
          textTransform="capitalize"
        >
          Categories
        </Span>
        <HStack gap="1">
          <CreateCategoryButton />
          <CategoryListDisplayButton />
        </HStack>
      </HStack>
      <Menu
        px="3"
        overflowY="auto"
        id="navigation-sidebar-categories"
      >
        <For each={categories}>
          {({ id, ...rest }) => (
            <CategoryItem
              key={id}
              id={id}
              {...rest}
            />
          )}
        </For>
      </Menu>
    </Grid>
  );
};
