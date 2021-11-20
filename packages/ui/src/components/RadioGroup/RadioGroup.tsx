import React from 'react';
import RadioGroupContext from './RadioGroupContext';
import styled from '@emotion/styled';

import { TRadioGroupProps } from './RadioGroup.types';
import { css } from '@emotion/react';
import InputWrapper from '../InputWrapper';

const RadioGroup = React.forwardRef<HTMLDivElement, TRadioGroupProps>(
  (
    {
      gap = 10,
      direction = 'row',
      name,
      value,
      label,
      required,
      error,
      labelWidth,
      labelAlign,
      onChange,
      children,
      WrapperProps = {},
      ...rest
    },
    ref,
  ) => (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      <InputWrapper
        label={label}
        required={required}
        error={error}
        labelWidth={labelWidth}
        labelAlign={labelAlign}
        {...WrapperProps}
      >
        <Wrapper ref={ref} direction={direction} gap={gap} {...rest}>
          {children}
        </Wrapper>
      </InputWrapper>
    </RadioGroupContext.Provider>
  ),
);

export default RadioGroup;

const Wrapper = styled.div<Pick<TRadioGroupProps, 'direction' | 'gap'>>`
  display: flex;
  flex-wrap: wrap;
  ${({ direction, gap }) => css`
    flex-direction: ${direction || 'column'};
    & > * + * {
      ${direction === 'column' ? 'margin-top' : 'margin-left'}: ${typeof gap === 'number'
        ? `${gap}px`
        : gap} !important;
    }
  `}
`;
