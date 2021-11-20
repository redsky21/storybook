import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import DatePicker from './DatePicker';
import ElementGroup from '../ElementGroup';

export default {
  component: DatePicker,
  title: 'Components/DatePicker',
} as Meta;

const Template1: Story = (args) => {
  const [value, setValue] = useState<Date | undefined>(new Date());
  return (
    <ElementGroup gap={10}>
      <DatePicker value={value} onChange={setValue} {...args} />
    </ElementGroup>
  );
};

export const GeneralView = Template1.bind({});
GeneralView.args = {
  width: '20rem',
};
