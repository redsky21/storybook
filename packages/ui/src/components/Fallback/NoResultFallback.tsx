import styled from '@emotion/styled';
import React from 'react';

import Fallback from '../Fallback';

export type TNoResultFallbackProps = {
  size?: 'small' | 'medium';
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function NoResultFallback({
  children,
  size = 'medium',
  ...rest
}: TNoResultFallbackProps) {
  return (
    <Fallback size={size} {...rest}>
      <Information>!</Information>
      {children || <p>No results found.</p>}
    </Fallback>
  );
}

export const Information = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 2px solid #b9b9b9;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  color: #b9b9b9;
  font-weight: 400;
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 1rem;
`;
