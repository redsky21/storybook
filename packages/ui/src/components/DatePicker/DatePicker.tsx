import styled from '@emotion/styled';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import React, { CSSProperties } from 'react';
import RSuiteDatePicker, { DatePickerProps } from 'rsuite/DatePicker';
import InputWrapper from '../InputWrapper';

export type TDatePicker = {
  label?: string;
  labelAlign?: 'left' | 'right';
  labelWidth?: number | string;
  required?: boolean;
  error?: boolean;
  width?: CSSProperties['width'];
  WrapperProps?: Record<string, any>;
} & DatePickerProps;
/** https://rsuitejs.com/components/date-picker/#%3CDatePicker%3E */
function DatePicker({
  label,
  labelAlign,
  labelWidth,
  required,
  width,
  error,
  WrapperProps = {},
  ...rest
}: TDatePicker) {
  const hash = React.useMemo(() => nanoid(), []);

  WrapperProps = {
    ...WrapperProps,
    className: cn('cnsui-datepicker', WrapperProps['className']),
  };

  return (
    <StyledInputWrapper
      id={hash}
      label={label}
      labelAlign={labelAlign}
      labelWidth={labelWidth}
      required={required}
      error={error}
      width={width}
      {...WrapperProps}
    >
      <DatePickerWrapper error={error}>
        <RSuiteDatePicker {...rest} />
      </DatePickerWrapper>
    </StyledInputWrapper>
  );
}

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

export default DatePicker;

const StyledInputWrapper = styled(InputWrapper)<{ id: string; width?: TDatePicker['width'] }>`
  &#${({ id }) => id} {
    .rs-picker.rs-picker-date {
      padding-right: ${({ width }) =>
        width ? `calc(24rem - ${typeof width === 'number' ? `${width}px` : width})` : '8rem'};

      .rs-picker-toggle input {
        width: ${({ width }) =>
          width ? (typeof width === 'number' ? `${width}px` : width) : '14rem'};
      }
    }
  }
`;
