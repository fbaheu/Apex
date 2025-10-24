import React from 'react';
import { Settings01Icon } from '@hugeicons/core-free-icons';

import { Icon } from '@apex/react/icon';
import { Dialog } from '@apex/react/dialog';
import { IconButton } from '@apex/react/button';
import { Span } from '@apex/react/styled-semantic-tag';

export const OpenSettingsButton: React.FunctionComponent = () => {
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
            icon={Settings01Icon}
          />
        </IconButton>
      </Dialog.Trigger>

      <Dialog.Content
        w="1280px"
        title={(
          <Span
            gap="4"
            alignItems="center"
            display="inline-flex"
            justifyContent="center"
          />
        )}
      >
        settings
      </Dialog.Content>
    </Dialog>
  );
};
