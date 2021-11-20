import React from 'react';
import styled from '@emotion/styled';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';

type TOverlaySpinnerProps = {
  backgroundColor?: React.CSSProperties['backgroundColor'];
  WrapperProps?: Record<string, any>;
} & CircularProgressProps;
export default function OverlaySpinner({
  backgroundColor = 'inherit',
  WrapperProps,
  ...rest
}: TOverlaySpinnerProps) {
  return (
    <Wrapper {...WrapperProps} backgroundColor={backgroundColor}>
      <CircularProgress disableShrink={true} size="1em" color="inherit" {...rest} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ backgroundColor: React.CSSProperties['backgroundColor'] }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1800;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
