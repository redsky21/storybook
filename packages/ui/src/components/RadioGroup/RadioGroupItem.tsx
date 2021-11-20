import React, { useCallback } from 'react';
import useRadioGroup from './useRadioGroup';
import MuiRadio from '@mui/material/Radio';

import { TRadioGroupItemProps } from './RadioGroup.types';
import styled from '@emotion/styled';
import FormControlLabel from '@mui/material/FormControlLabel';

const RadioGroupItem = React.forwardRef<HTMLDivElement, TRadioGroupItemProps>(
  ({ label, disabled, value, ...rest }, ref) => {
    const { value: selectedValue, onChange } = useRadioGroup();
    const checked = value === selectedValue;

    const handleClick = useCallback(() => {
      if (!disabled) {
        onChange?.(value);
      }
    }, [onChange, value, disabled]);

    return (
      <Wrapper ref={ref} checked={checked} onClick={handleClick} {...rest}>
        <FormControlLabel
          value={value}
          control={
            <MuiRadio
              color="primary"
              checked={checked}
              disableRipple={true}
              sx={{ padding: '0 !important' }}
            />
          }
          label={label}
          disabled={disabled}
          sx={{
            height: '3.4rem !important',
            lineHeight: '3.4rem !important',
            marginLeft: '0 !important',
            marginRight: '0 !important',
            '& .MuiFormControlLabel-label': {
              fontSize: '1.3rem',
              marginLeft: '0.5rem !important',
            },
          }}
        />
      </Wrapper>
    );
  },
);

export default RadioGroupItem;

const Wrapper = styled.div<{ checked?: boolean }>`
  display: flex;
  align-items: center;
`;
