import React, { useMemo } from 'react';
import cn from 'classnames';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';
import styled from '@emotion/styled';
import { nanoid } from 'nanoid';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from './SearchIcon';
import ClearIcon from '@mui/icons-material/Clear';
import colors from '../../theme/colors';
import deepmerge from 'deepmerge';
import { styled as muiStyled } from '@mui/material/styles';
import OverlaySpinner from '../OverlaySpinner';
import InputWrapper from '../InputWrapper';

type SearchProps = {
  isLoading?: boolean;
  onClear?: () => void;
  onSearchClick?: () => void;
};

type Props = {
  width?: string | number;
  fullWidth?: boolean;
  labelAlign?: 'left' | 'right';
  labelWidth?: number | string;
  readOnly?: boolean;
  WrapperProps?: Record<string, any>;
  SearchProps?: SearchProps;
};
export type TTextFieldProps = Props & Omit<TextFieldProps, keyof Props>;

function TextField({
  type,
  label,
  value,
  onChange,
  labelAlign,
  labelWidth,
  WrapperProps = {},

  required,
  disabled,
  readOnly = false,
  error,

  fullWidth,
  width,
  SearchProps,
  sx = {},
  ...rest
}: TTextFieldProps) {
  const hash = useMemo(() => nanoid(6), []);

  const customStyleDef = useMemo(
    () => deepmerge<TTextFieldProps['sx']>({ width: width || '24rem' }, sx),
    [width, sx],
  );

  const wrapperClassName = cn('cnsui-textfield', WrapperProps['className']);

  return (
    <InputWrapper
      htmlFor={hash}
      label={label}
      labelAlign={labelAlign}
      labelWidth={labelWidth}
      required={required}
      error={error}
      className={wrapperClassName}
      fullWidth={fullWidth}
      {...WrapperProps}
    >
      <StyledTextField
        sx={customStyleDef}
        variant="standard"
        type={type}
        error={error}
        multiline={false}
        select={false}
        required={required}
        value={value}
        disabled={disabled || Boolean(SearchProps?.isLoading)}
        onChange={onChange}
        inputProps={{ id: hash }}
        InputProps={{
          readOnly,
          ...(type === 'search' && {
            endAdornment: (
              <InputAdornment position="end">
                {value && !disabled && (
                  <ClearButton type="button" tabIndex={-1} onClick={SearchProps?.onClear}>
                    <ClearIcon sx={{ fontSize: '1.5rem' }} />
                  </ClearButton>
                )}
                <SearchButton
                  type="button"
                  tabIndex={-1}
                  isLoading={SearchProps?.isLoading ?? false}
                  onClick={!disabled ? SearchProps?.onSearchClick : undefined}
                >
                  {SearchProps?.isLoading && <OverlaySpinner color="primary" size="1.5rem" />}
                  <SearchIcon width="1.5rem" height="1.5rem" />
                </SearchButton>
              </InputAdornment>
            ),
          }),
        }}
        {...rest}
      />
    </InputWrapper>
  );
}

export default TextField;

const StyledTextField = muiStyled(MuiTextField)({
  backgroundColor: 'inherit',
  '& .MuiInput-root': {
    fontSize: '1.4rem',
    '&:before, &:after': {
      borderBottom: '0 !important',
    },
    '&.Mui-disabled': {
      opacity: 0.75,
      cursor: 'not-allowed',
      '& [type="button"]': {
        cursor: 'not-allowed',
        userSelect: 'none',
        zIndex: '-1',
      },
    },
  },
  '& .MuiFormHelperText-root': {
    fontSize: '1.2rem',
    margin: '0.5rem 0.25rem 0',
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&.Mui-error': {
      color: colors['danger-600'],
    },
  },
  '& .MuiInput-underline': {
    borderBottom: '1px solid rgba(0,0,0,0.2)',
  },
  '& .MuiInputBase-input': {
    height: '3.4rem',
    lineHeight: '3.4rem',
    backgroundColor: 'inherit',
    paddingTop: 0,
    paddingBottom: 0,
    '&[readonly]': {
      cursor: 'default',
    },
  },
  '& .MuiInputBase-inputAdornedStart': {
    paddingLeft: 0,
  },
});

const ClearButton = styled.button`
  display: inline-flex;
  svg {
    color: #bbb;
  }
`;

const SearchButton = styled.button<{ isLoading?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3.2rem;
  width: 3.2rem;
  height: 3.2rem;
  margin-left: 0;
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & > svg {
    color: ${({ isLoading }) => (isLoading ? 'rgba(0,0,0, 0.1)' : '#000')};
  }
`;
