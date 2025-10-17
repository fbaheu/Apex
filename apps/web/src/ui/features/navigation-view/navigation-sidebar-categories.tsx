import React from 'react';
import { CircleIcon } from '@hugeicons/core-free-icons';

import { For } from '@apex/react/for';
import { Span } from '@apex/react/styled-semantic-tag';
import { HStack, Grid, VStack } from '@apex/design-system/jsx';

import { categoryStore } from '~ui/stores/category-store';
import { CreateCategoryButton } from '~ui/features/category-view/create';
import { CategoryListDisplayButton } from '~ui/features/category-view/list';

import { NavigationSidebarMenuItem } from './navigation-sidebar-menu-item';

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
        py="3"
        pl="3"
        pr="4"
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
        <HStack gap="0.5">
          <CreateCategoryButton />
          <CategoryListDisplayButton />
        </HStack>
      </HStack>
      <VStack
        h="full"
        px="3"
        gap="1"
        overflowY="auto"
      >
        <For each={categories}>
          {({ id, label }) => (
            <NavigationSidebarMenuItem
              key={id}
              category={id}
              label={label}
              icon={CircleIcon}
            />
          )}
        </For>
      </VStack>
    </Grid>
  );
};
