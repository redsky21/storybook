import React from 'react';
import Fallback from '../Fallback';
import { Information } from './NoResultFallback';

export type TErrorFallbackProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium';
} & React.HTMLAttributes<HTMLDivElement>;

export default function ErrorFallback({ children, size, ...rest }: TErrorFallbackProps) {
  return (
    <Fallback size={size} {...rest}>
      <Information>!</Information>
      {children ? children : <p>An unexpected error has occured.</p>}
    </Fallback>
  );
}
