import React from 'react';

import Fallback from '../Fallback';
import OverlaySpinner from '../OverlaySpinner';

export type TPendingFallbackProps = {
  size?: 'small' | 'medium';
} & React.HTMLAttributes<HTMLDivElement>;

export default function PendingFallback({ size, ...rest }: TPendingFallbackProps) {
  return (
    <Fallback style={{ backgroundColor: 'transparent' }} size={size} {...rest}>
      <OverlaySpinner />
    </Fallback>
  );
}
