import React from 'react';
import styled from '@emotion/styled';
import { generateButtonColorStyles } from './Button.helpers';
import OverlaySpinner from '../OverlaySpinner';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';

export type TButtonProps = {
  variant?: 'none' | 'outlined' | 'contained';
  color?: 'primary' | 'primary-reverse' | 'normal' | 'inherit';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'inherit';
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  as?: React.ElementType<any> | undefined;
  to?: string;
  type?: 'button' | 'submit';
  ButtonBaseProps?: ButtonBaseProps;
} & React.HTMLAttributes<HTMLDivElement>;

const Button = React.forwardRef<HTMLDivElement, TButtonProps>(
  (
    {
      type = 'button',
      children,
      variant = 'contained',
      color = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      fullWidth = false,
      ButtonBaseProps,
      ...rest
    },
    ref,
  ) => {
    return (
      <ButtonBase
        type={type}
        disabled={disabled}
        sx={{
          width: fullWidth ? '100%' : 'auto',
          minWidth: 'unset !important',
          height: 'auto !important',
          padding: '0 !important',
        }}
        {...ButtonBaseProps}
      >
        <Wrapper
          ref={ref}
          role="button"
          variant={variant}
          color={color}
          size={size}
          disabled={disabled}
          fullWidth={fullWidth}
          {...rest}
        >
          {isLoading && <OverlaySpinner />}
          <Inner style={{ opacity: isLoading ? 0 : 1 }}>{children}</Inner>
        </Wrapper>
      </ButtonBase>
    );
  },
);

export default Button;

export const Wrapper = styled.div<TButtonProps>(
  {
    position: 'relative',
    appearance: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    border: 0,
    outline: 0,
    backgroundColor: 'inherit',
    transition: 'all 0.125s ease-out',
    cursor: 'pointer',
    padding: '1.0rem 2.2rem',
    borderRadius: '0.6rem',
    fontSize: '1.4rem',
    // '&:hover': {
    //   transform: 'translate3d(0, -1px, 0)',
    // },
    // '&:active': {
    //   transform: 'translate3d(0, 0, 0)',
    // },
  },
  ({ variant, color, size, disabled, fullWidth }) => ({
    ...(size === 'inherit' && {
      height: 'auto',
      lineHeight: 'inherit',
      padding: 0,
    }),
    ...(fullWidth && {
      width: '100%',
    }),

    // ...generateButtonSizeStyles({ size }),
    ...generateButtonColorStyles({ variant, color }),

    // disabled
    '&[disabled]': {
      // 기본
      opacity: 0.8,
      cursor: 'not-allowed',

      // red theme
      '.theme-dark &': {
        opacity: 0.5,
      },
    },
  }),
);

const Inner = styled.div`
  display: flex;
  line-height: 1;
  color: currentColor;
  font-size: 1em;
`;
