import React from 'react';
import cn from 'classnames';
import TextField, { TextFieldProps } from '../TextField';
import { styled } from '@mui/material/styles';
import InputWrapper from '../InputWrapper';
import SelectItem from './SelectItem';

export type TSelectProps = {
  width?: string | number;
  labelAlign?: 'left' | 'right';
  labelWidth?: number | string;
  WrapperProps?: Record<string, any>;
  useNoSelect?: boolean;
} & TextFieldProps;

export default function Select({
  children,
  placeholder = 'Select',
  value,
  width,
  useNoSelect = true,
  WrapperProps = {},
  onChange,
  className,
  ...rest
}: TSelectProps) {
  WrapperProps = {
    ...WrapperProps,
    className: cn('cnsui-select', className),
  };
  return (
    <StyledTextField
      select={true}
      value={value}
      onChange={onChange}
      WrapperProps={WrapperProps}
      sx={{ width: width || '24rem' }}
      SelectProps={{
        defaultValue: '',
        displayEmpty: true,
        MenuProps: {
          sx: {
            '& .MuiMenu-paper': {
              padding: '0 !important',
              border: '0 !important',
              borderRadius: '0.4rem !important',
              boxShadow:
                '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%) !important',
            },
            '& .MuiMenuItem-root': {
              fontSize: '1.4rem',
              fontWeight: 'normal',
              color: '#000',
            },
          },
        },
      }}
      {...rest}
    >
      <SelectItem
        disabled={!useNoSelect}
        value={''}
        style={{
          display: 'none',
          ...(useNoSelect && { display: 'block', opacity: 0.5 }),
        }}
      >
        {placeholder}
      </SelectItem>

      {children}
    </StyledTextField>
  );
}

const StyledTextField = styled(TextField)({
  '& .MuiSelect-root': {
    padding: 0,
  },
  '& .MuiSelect-select': {
    width: '100%',
    backgroundColor: 'inherit !important',
    fontSize: '1.4rem',
    padding: '.85rem 1.8rem .85rem 1.3rem !important',
    lineHeight: 1,
  },
  '& .MuiSelect-iconStandard': {
    fontSize: '2rem',
    right: 0,
    color: '#000',
  },
});
