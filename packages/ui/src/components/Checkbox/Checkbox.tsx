import React from 'react';
import cn from 'classnames';
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

export type TCheckboxProps = {
  name?: MuiCheckboxProps['name'];
  checked?: MuiCheckboxProps['checked'];
  color?: MuiCheckboxProps['color'];
  value?: MuiCheckboxProps['value'];
} & MuiCheckboxProps;

const Checkbox = React.forwardRef<HTMLButtonElement, TCheckboxProps>(
  ({ color = 'primary', className, ...rest }, ref) => {
    return (
      <MuiCheckbox
        sx={{
          root: {
            padding: '0 !important',
            '&:hover': {
              backgroundColor: 'transparent !important',
            },
          },
        }}
        ref={ref}
        color={color}
        disableRipple={true}
        className={cn('cnsui-checkbox', className)}
        {...rest}
      />
    );
  },
);

export default Checkbox;
