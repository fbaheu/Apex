import React from 'react';

import { HStack, Grid } from '@apex/design-system/jsx';
import { Span } from '@apex/react/styled-semantic-tag';

import { CreateCategoryButton } from '~ui/features/category-view/create';
import { CategoryListDisplayButton } from '~ui/features/category-view/list';

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
  return (
    <Grid gridTemplateRows="min-content auto">
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
          <CategoryListDisplayButton />
          <CreateCategoryButton />
        </HStack>
      </HStack>
      <Grid>
        categories
      </Grid>
    </Grid>
  );
};
