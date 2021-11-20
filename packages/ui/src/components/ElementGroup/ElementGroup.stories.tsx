import React from 'react';

import ElementGroup from './ElementGroup';
import Button from '../Button';
import styled from '@emotion/styled';

export default {
  title: 'components/ElementGroup',
  component: ElementGroup,
  parameters: {
    props: {
      propTablesInclude: [ElementGroup],
    },
  },
};

export const GeneralView = () => {
  return (
    <Wrapper>
      <h2>Direction: Row</h2>
      <ElementGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ElementGroup>
      <h2>Gap: 20px</h2>
      <ElementGroup gap={20}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ElementGroup>
      <h2>Direction: Column</h2>
      <ElementGroup direction="column">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ElementGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  h2 {
    line-height: 1;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;
