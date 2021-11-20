import React from 'react';
import MuiList, { ListProps } from '@mui/material/List';

export default function List({ children, ...rest }: ListProps) {
  return (
    <MuiList disablePadding={false} {...rest}>
      {children}
    </MuiList>
  );
}
