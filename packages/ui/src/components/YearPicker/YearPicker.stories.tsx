import React from 'react';
import { Story, Meta } from '@storybook/react';
import YearPicker from './YearPicker';
import ElementGroup from '../ElementGroup';

export default {
  component: YearPicker,
  title: 'Components/YearPicker',
} as Meta;

const Template1: Story = (args) => {
  const [value, setValue] = React.useState(new Date());
  const onChange = (val: any) => setValue(val);
  return (
    <ElementGroup gap={10}>
      <YearPicker
        label="Affilication"
        labelWidth="10.5rem"
        required={true}
        value={value}
        onChange={onChange}
        disableMonthPicker={true}
        {...args}
      />
    </ElementGroup>
  );
};

export const YearPickerView = Template1.bind({});

const Template2: Story = (args) => {
  const [value, setValue] = React.useState(new Date());
  const onChange = (val: any) => setValue(val);
  return (
    <ElementGroup gap={10} className="YearMonthPicker-wrap">
      <YearPicker
        label="Affilication"
        labelWidth="10.5rem"
        required={true}
        value={value}
        onChange={onChange}
        disableMonthPicker={false}
        {...args}
      />
    </ElementGroup>
  );
};

export const YearMonthPickerView = Template2.bind({});
YearMonthPickerView.args = {
  width: 'auto',
};
