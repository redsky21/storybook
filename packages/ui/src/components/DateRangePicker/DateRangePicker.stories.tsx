import React from 'react';
import { Story, Meta } from '@storybook/react';
import DateRangePicker from './DateRangePicker';

export default {
  component: DateRangePicker,
  title: 'Components/DateRangePicker',
} as Meta;

const Template1: Story = (args) => {
  return <DateRangePicker label="test label" {...args} />;
};

export const GeneralView = Template1.bind({});
