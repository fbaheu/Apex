import React from 'react';
import { MoreHorizontalIcon } from '@hugeicons/core-free-icons';

import { Icon } from '@apex/react/icon';
import { IconButton } from '@apex/react/button';

export const CategoryListDisplayButton: React.FunctionComponent = () => {
  return (
    <IconButton
      size="sm"
      variant="ghost"
    >
      <Icon
        size="xs"
        icon={MoreHorizontalIcon}
      />
    </IconButton>
  );
};
