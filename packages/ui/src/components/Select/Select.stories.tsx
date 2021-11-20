import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Select, SelectItem } from './';

export default {
  component: Select,
  title: 'Components/Select',
} as Meta;

const mock = [
  { value: 'USD', label: '대한민국' },
  { value: 'EUR', label: '오스트레일리아' },
  { value: 'BTC1', label: '김수한무 거북이' },
  { value: 'BTC2', label: '김수한무 거북이' },
  { value: 'BTC3', label: '김수한무 거북이' },
  { value: 'BTC4', label: '김수한무 거북이' },
];

const Template: Story = (args) => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Select placeholder="선택하세요" value={value} onChange={handleChange} {...args}>
      {mock.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export const Cases = Template.bind({});

Cases.args = {
  label: 'Affilication',
  labelAlign: 'right',
  required: true,
  error: false,
  disabled: false,
};
