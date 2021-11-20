import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

export type TSkeletonProps = {
  variant: 'circle' | 'rect';
  width: React.CSSProperties['width'];
  height: React.CSSProperties['height'];
  delay?: number;
} & React.InsHTMLAttributes<HTMLSpanElement>;

const Skeleton = React.forwardRef<HTMLSpanElement, TSkeletonProps>(
  ({ variant = 'rect', delay = 0, width = '100%', height = 15, style = {}, ...rest }, ref) => {
    return (
      <Element
        ref={ref}
        variant={variant}
        delay={delay}
        style={{ ...style, width, height }}
        {...rest}
      />
    );
  },
);

export default React.memo(Skeleton);

const showAndHide = keyframes`
  0% {
    opacity: 1;
    transform: scale(0.25);
  }

  5% {
    opacity: 1;
    transform: scale(1);
  }

  70% {
    opacity: 1
  }

  75%, 100% {
    opacity: 0;
  }
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
`;

const Element = styled.span<Omit<TSkeletonProps, 'width' | 'height'>>`
  display: block;
  position: relative;
  ${({ delay = 0 }) =>
    delay > 0 &&
    css`
      animation: ${showAndHide} linear 5000ms infinite;
      animation-delay: ${delay}ms;
    `}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(100, 100, 100, 0.15);
    border-radius: ${({ variant }) => (variant === 'rect' ? '5px' : '9999px')};
    animation: ${() =>
      css`
        ${pulse} 1.5s ease-in-out 0.5s infinite;
      `};
  }
`;
