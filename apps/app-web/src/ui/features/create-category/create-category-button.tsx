import React from 'react';
import { Add01Icon } from '@hugeicons/core-free-icons';

import { Icon } from '@apex/react/components/icon';
import { IconButton } from '@apex/react/components/button';

export const CreateCategoryButton: React.FunctionComponent = () => {
  return (
    <IconButton>
      <Icon
        size="sm"
        icon={Add01Icon}
      />
    </IconButton>
  );
};
