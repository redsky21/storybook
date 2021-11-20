import React from 'react';

import MuiListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';

export type TListItemProps = {
  width?: number | string;
} & ListItemProps &
  ListItemButtonProps;
export default function ListItem({ width, sx, children, onClick, ...rest }: TListItemProps) {
  return (
    <MuiListItem disablePadding={true} sx={{ ...sx, width }} {...rest}>
      {typeof onClick === 'function' ? <ListItemButton>{children}</ListItemButton> : children}
    </MuiListItem>
  );
}
