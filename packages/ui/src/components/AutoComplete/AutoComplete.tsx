import React from 'react';

import MuiAutoComplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField, { TextFieldProps } from '../TextField';

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import styled from '@emotion/styled';
import { styled as MuiStyled } from '@mui/material/styles';
import colors from '../../theme/colors';
import cn from 'classnames';

type TOption = { value: string; label: string };
type Props = {
  label?: string;
  labelAlign?: 'left' | 'right';
  labelWidth?: number | string;
  required?: boolean;
  error?: boolean;
  WrapperProps?: Record<string, any>;
  TextFieldProps?: Omit<
    TextFieldProps,
    'label' | 'labelAlign' | 'labelWidth' | 'required' | 'error'
  >;
};

export type TAutoCompleteProps = Props &
  Omit<
    AutocompleteProps<TOption, boolean | undefined, boolean | undefined, boolean | undefined, any>,
    keyof Props | 'renderInput' | 'renderOption'
  >;

function checkIsOptionEqualToValue(option: TOption, selected: TOption) {
  return option.value === selected.value;
}

function AutoComplete({
  label,
  labelAlign,
  labelWidth,
  required,
  error,
  value,
  onChange,
  WrapperProps = {},
  TextFieldProps = undefined,
  className,
  ...rest
}: TAutoCompleteProps) {
  return (
    <MuiAutoComplete
      value={value}
      onChange={onChange}
      isOptionEqualToValue={checkIsOptionEqualToValue}
      className={cn('cnsui-autocomplete', className, WrapperProps['className'])}
      autoSelect={false}
      autoHighlight={true}
      clearOnBlur={false}
      renderInput={(params) => (
        <StyledTextField
          {...{ label, labelAlign, labelWidth, required, error }}
          {...params}
          {...TextFieldProps}
        />
      )}
      renderOption={(props, option, { inputValue, selected, ...rest }) => {
        const matches = match(option.label, inputValue);
        const parts = parse(option.label, matches);
        return (
          <MenuItem selected={selected} {...props}>
            <div>
              {parts.map((part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}
            </div>
          </MenuItem>
        );
      }}
      {...rest}
    />
  );
}

export default AutoComplete;

const StyledTextField = MuiStyled(TextField)({
  '& .MuiButtonBase-root': {
    minWidth: 'unset',
    height: 'inherit',
    padding: '0.5rem',
    borderRadius: '50%',
  },
  '& .MuiInput-input.MuiInputBase-input': {
    padding: '1rem 1.4rem',
  },
  '& .MuiAutocomplete-clearIndicator': {
    color: '#aaa',
  },
});

const MenuItem = styled.li<{ selected: boolean }>`
  font-size: 1.4rem;
  background-color: ${({ selected }) => (selected ? colors['secondary-500'] : 'inherit')};
  &:focus {
    background-color: ${colors['gray-100']};
  }
`;
