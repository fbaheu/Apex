import React from 'react';
import { Add01Icon, ResourcesAddIcon } from '@hugeicons/core-free-icons';

import { Icon } from '@apex/react/icon';
import { Dialog } from '@apex/react/dialog';
import { IconButton } from '@apex/react/button';
import { Span } from '@apex/react/styled-semantic-tag';

import { CreateCategoryForm } from './create-category-form';

export const CreateCategoryButton: React.FunctionComponent = () => {
  const [isOpen, toggle] = React.useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={toggle}
    >
      <Dialog.Trigger>
        <IconButton
          size="sm"
          variant="ghost"
        >
          <Icon
            size="xs"
            icon={Add01Icon}
          />
        </IconButton>
      </Dialog.Trigger>

      <Dialog.Content
        w="320px"
        title={(
          <Span
            gap="4"
            alignItems="center"
            display="inline-flex"
            justifyContent="center"
          >
            Create new category
          </Span>
        )}
        description={(
          <Span>
            Manage your notes into similar content.
          </Span>
        )}
      >
        <CreateCategoryForm onCategoryCreationEnd={() => toggle(false)} />
      </Dialog.Content>
    </Dialog>
  );
};
