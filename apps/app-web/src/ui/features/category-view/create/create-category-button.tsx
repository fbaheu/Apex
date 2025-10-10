import React from 'react';
import { Add01Icon } from '@hugeicons/core-free-icons';

import { Icon } from '@apex/react/icon';
import { IconButton } from '@apex/react/button';

export const CreateCategoryButton: React.FunctionComponent = () => {
  return (
    <IconButton
      size="sm"
      variant="ghost"
    >
      <Icon
        size="xs"
        icon={Add01Icon}
      />
    </IconButton>
  );
};
