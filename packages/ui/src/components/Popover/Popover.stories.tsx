import { Story, Meta } from '@storybook/react';
import Popover, { TPopoverProps } from './Popover';
import React from 'react';
import Button from '../Button';

export default {
  component: Popover,
  title: 'Components/Popover',
} as Meta;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<TPopoverProps> = ({ align, renderTrigger }) => {
  // inside your panel

  return (
    <div style={{ padding: '50px 200px' }}>
      <Popover {...{ align, renderTrigger }}>
        <div style={{ padding: 150, backgroundColor: '#fff' }}>๋ด์ฉ</div>
      </Popover>
    </div>
  );
};

export const Cases = Template.bind({});

Cases.args = {
  align: 'left',
  renderTrigger: ({ onClick }) => <Button onClick={onClick}>๊ฐ๋๋ค๋ผ๋ง๋ฐ์ฌ์์์ฐจ์นดํํํ</Button>,
};
