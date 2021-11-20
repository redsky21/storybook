import { Story, Meta } from '@storybook/react';
import Popover, { TPopoverProps } from './Popover';
import React from 'react';
import Button from '../Button';

export default {
  component: Popover,
  title: 'Components/Popover',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<TPopoverProps> = ({ align, renderTrigger }) => {
  // inside your panel

  return (
    <div style={{ padding: '50px 200px' }}>
      <Popover {...{ align, renderTrigger }}>
        <div style={{ padding: 150, backgroundColor: '#fff' }}>내용</div>
      </Popover>
    </div>
  );
};

export const Cases = Template.bind({});

Cases.args = {
  align: 'left',
  renderTrigger: ({ onClick }) => <Button onClick={onClick}>가나다라마바사아자차카타파하</Button>,
};
