import styled from '@emotion/styled';
import cn from 'classnames';
import React from 'react';
import RSuiteDateRangePicker, { DateRangePickerProps } from 'rsuite/DateRangePicker';
import InputWrapper from '../InputWrapper';

export type TDateRangePicker = {
  label?: string;
  labelAlign?: 'left' | 'right';
  labelWidth?: number | string;
  required?: boolean;
  error?: boolean;
  WrapperProps?: Record<string, any>;
} & DateRangePickerProps;

function DateRangePicker({
  label,
  labelAlign,
  labelWidth,
  required,
  error,
  WrapperProps = {},
  ...rest
}: TDateRangePicker) {
  WrapperProps = {
    ...WrapperProps,
    className: cn('cnsui-datepicker', WrapperProps['className']),
  };

  return (
    <InputWrapper
      label={label}
      labelAlign={labelAlign}
      labelWidth={labelWidth}
      required={required}
      error={error}
      {...WrapperProps}
    >
      <DatePickerWrapper error={error}>
        <RSuiteDateRangePicker {...rest} />
      </DatePickerWrapper>
    </InputWrapper>
  );
}

export default DateRangePicker;

const DatePickerWrapper = styled.div<{ error?: boolean }>`
  ${({ error }) =>
    error &&
    `
      & svg {
        fill: #DB2330 !important
      }
      & input {
        color: #DB2330 !important;
        border-bottom: 1px solid #DB2330 !important;  
        &::placeholder {
          color: #DB2330 !important
        }
      }
  `}
`;
