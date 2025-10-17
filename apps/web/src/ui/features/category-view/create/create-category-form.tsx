import React from 'react';
import { useForm } from 'react-hook-form';
import { arktypeResolver } from '@hookform/resolvers/arktype';

import { useDispatcher } from '@apex/dispatcher';
import { CategorySchema, type Category, type WithAttributesAndId } from '@apex/core/collections';

import { Button } from '@apex/react/button';
import { Field, Input } from '@apex/react/form';
import { Form } from '@apex/react/styled-semantic-tag';
import { HStack, VStack } from '@apex/design-system/jsx';
import { categoryStore } from '~ui/stores/category-store';

/**
 * INTERFACE
 */
type CategoryCreationForm = Omit<Category, keyof WithAttributesAndId>;

export interface CategoryCreationFormProps {
  onCategoryCreationEnd(newCategory: Category): void;
}

export const CreateCategoryForm: React.FunctionComponent<CategoryCreationFormProps> = (props) => {
  // [HOOK] useDispatcher - Event dispatcher for category creation
  const { dispatch } = useDispatcher();
  // [HOOK] useForm - State of un-created category
  const { handleSubmit, register } = useForm<CategoryCreationForm>({
    resolver: arktypeResolver(CategorySchema)
  });

  const handleSubmitCreateCategory: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    return handleSubmit(
      async (values) => {
        const creation = await dispatch('create-new-category', values);

        if (creation.isSuccess()) {
          await categoryStore.getState().refresh();
          props?.onCategoryCreationEnd(creation.unwrap());
        }
      },
    )(ev);
  };

  return (
    <Form
      gap="6"
      display="grid"
      gridTemplateRows="1fr min-content"
      onSubmit={handleSubmitCreateCategory}
    >
      <VStack px="6">
        <Field w="full">
          <Field.Label>
            Name
          </Field.Label>
          <Input
            autoFocus
            type="text"
            autoComplete="off"
            placeholder="Name of your category"
            {...register('label')}
          />
        </Field>
      </VStack>
      <HStack
        px="6"
        w="full"
      >
        <Button
          w="full"
          type="submit"
        >
          Create
        </Button>
      </HStack>
    </Form>
  );
};
