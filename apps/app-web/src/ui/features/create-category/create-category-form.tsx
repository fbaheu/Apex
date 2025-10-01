import React from 'react';
import { useForm } from 'react-hook-form';
import { arktypeResolver } from '@hookform/resolvers/arktype';

import { useDispatcher } from '@apex/dispatcher';
import { CategorySchema, type Category, type BaseDocumentAttributes } from '@apex/core/collections';

import { HStack, VStack } from '@apex/design-system/jsx';
import { Button } from '@apex/react/components/button';
import { Form } from '@apex/react/components/styled-semantic-tag';

export const CreateCategoryForm: React.FunctionComponent = () => {
  // [HOOK] useDispatcher - Event dispatcher for category creation
  const { dispatch } = useDispatcher();
  // [HOOK] useForm - State of un-created category
  const { handleSubmit, register, formState } = useForm<Omit<Category, keyof BaseDocumentAttributes | 'id'>>({
    resolver: arktypeResolver(CategorySchema)
  });

  const onSubmitCreateCategory: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    return handleSubmit(
      values => void dispatch('create-new-category', values),
    )(ev);
  };

  console.log(formState.errors);

  return (
    <Form
      p="4"
      display="grid"
      gridTemplateRows="1fr min-content"
      onSubmit={onSubmitCreateCategory}
    >
      <VStack>
        <input
          type="text"
          {...register('label')}
        />
      </VStack>
      <HStack justifyContent="space-between">
        <Button type="button">
          Cancel
        </Button>
        <Button type="submit">
          Submit
        </Button>
      </HStack>
    </Form>
  );
};
