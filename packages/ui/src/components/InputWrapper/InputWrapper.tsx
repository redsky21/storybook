import styled from '@emotion/styled';
import { TextFieldProps } from '../TextField';
import React from 'react';
import colors from '../../theme/colors';
import { css } from '@emotion/react';

type Props = {
  htmlFor?: string;
  children: React.ReactNode;
} & Pick<
  TextFieldProps,
  'label' | 'labelAlign' | 'labelWidth' | 'fullWidth' | 'required' | 'error'
>;

export type TInputWrapper = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;

function InputWrapper({
  htmlFor = '',
  children,
  label,
  labelAlign = 'right',
  labelWidth,
  required = false,
  error = false,
  ...rest
}: TInputWrapper) {
  return (
    <Wrapper {...rest}>
      {label && (
        <Label
          htmlFor={htmlFor}
          labelAlign={labelAlign}
          labelWidth={labelWidth}
          required={required}
          error={error}
          tabIndex={-1}
        >
          {label}
        </Label>
      )}

      {children}
    </Wrapper>
  );
}

export default InputWrapper;

const Wrapper = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  display: flex;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      & > div {
        flex: 1;
      }
    `}
`;

const Label = styled.label<Pick<TInputWrapper, 'labelAlign' | 'labelWidth' | 'required' | 'error'>>`
  min-width: ${({ labelWidth }) => (labelWidth ? 'unset' : '12.4rem')};
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 3.4rem;
  text-align: ${({ labelAlign }) => labelAlign};
  user-select: none;
  width: ${({ labelWidth }) => labelWidth ?? 'auto'};
  color: ${({ error }) => (error ? colors['danger-600'] : '#191919')};
  ${({ required }) =>
    required &&
    css`
      &::before {
        display: inline-block;
        content: '*';
        color: ${colors['danger-600']};
        vertical-align: top;
        font-size: 1.7rem;
        line-height: 3.4rem;
        font-weight: bold;
        margin-right: 0.4rem;
      }
    `}
`;
