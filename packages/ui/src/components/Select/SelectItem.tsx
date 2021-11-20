import React from 'react';
import cn from 'classnames';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';

export default function SelectItem({ children, className, ...rest }: MenuItemProps) {
  return (
    <MenuItem className={cn('cnsui-menuitem', className)} {...rest}>
      {children}
    </MenuItem>
  );
}
