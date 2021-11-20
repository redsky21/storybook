import React, { useMemo } from 'react';
import MuiTextField, { TextFieldProps } from '../TextField';
import { nanoid } from 'nanoid';
import { styled } from '@mui/material/styles';

export type TTextareaProps = {
  width?: string | number;
  labelAlign?: 'left' | 'right';
  labelWidth?: number | string;
  WrapperProps?: Record<string, any>;
  useResize?: boolean;
} & Omit<TextFieldProps, 'sx'>;

function Textarea({
  type,
  value,
  onChange,
  WrapperProps = {},
  useResize = false,
  disabled,
  width = 200,
  minRows = 3,
  maxRows = 6,
  ...rest
}: TTextareaProps) {
  const hash = useMemo(() => nanoid(6), []);

  return (
    <StyledTextField
      sx={{
        width: width || 'auto',
        '& .MuiInputBase-inputMultiline': {
          resize: useResize ? 'both' : 'none',
        },
      }}
      multiline={true}
      variant="outlined"
      minRows={minRows}
      maxRows={maxRows}
      value={value}
      disabled={disabled}
      onChange={onChange}
      inputProps={{ id: hash }}
      {...rest}
    />
  );
}

export default Textarea;

const StyledTextField = styled(MuiTextField)({
  position: 'relative',
  paddingTop: 0,
  '& .MuiInputBase-multiline': {
    padding: 0,
    borderBottom: 0,
    backgroundColor: '#fff !important',
  },

  '& .MuiInputBase-inputMultiline': {
    paddingTop: '1rem !important',
    paddingBottom: '1rem !important',
    lineHeight: 'normal !important',
  },
});
