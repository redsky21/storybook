import React from 'react';
import { Story, Meta } from '@storybook/react';
import Textarea, { TTextareaProps } from './Textarea';

export default {
  component: Textarea,
  title: 'Components/Textarea',
} as Meta;

const Template1: Story<TTextareaProps> = (args) => {
  const [value, setValue] = React.useState('');
  const handleChange = React.useCallback((value) => setValue(value), []);
  return <Textarea {...args} value={value} onChange={(e) => handleChange(e.target.value)} />;
};

export const Template = Template1.bind({});

Template.args = {
  width: '100%',
  label: 'Affilication',
  labelAlign: 'right',
  error: false,
  required: true,
  disabled: false,
  placeholder: 'Type Here...',
  helperText: 'Helper Text...',
};
