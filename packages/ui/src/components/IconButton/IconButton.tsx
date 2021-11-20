import React from 'react';
import styled from '@emotion/styled';
import Button from '../Button';

const IconButton = styled(Button)`
  padding: 0.75rem;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

IconButton.defaultProps = {
  variant: 'none',
  size: 'inherit',
};

export default IconButton;
