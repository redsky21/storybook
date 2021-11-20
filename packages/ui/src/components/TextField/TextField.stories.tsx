import React from 'react';
import { Story, Meta } from '@storybook/react';
import TextField, { TTextFieldProps } from './TextField';
import ElementGroup from '../ElementGroup';
import Button from '../Button';

export default {
  component: TextField,
  title: 'Components/TextField',
} as Meta;

const Template1: Story<TTextFieldProps> = (args) => {
  const [value, setValue] = React.useState('');
  const handleChange = React.useCallback((value) => setValue(value), []);
  const handleClear = React.useCallback(() => setValue(''), []);
  const handleSearch = React.useCallback(() => {
    alert('search click');
  }, []);
  return (
    <ElementGroup gap={10}>
      <TextField
        {...args}
        value={value}
        SearchProps={{ onClear: handleClear, onSearchClick: handleSearch }}
        onChange={(e) => handleChange(e.target.value)}
      />
    </ElementGroup>
  );
};

export const SearchType = Template1.bind({});

SearchType.args = {
  type: 'search',
  width: '24rem',
  label: 'Affilication',
  labelAlign: 'right',
  error: false,
  required: true,
  disabled: false,
  placeholder: 'Type Here...',
  helperText: 'Helper Text...',
};

const Template2: Story = () => {
  const [value, setValue] = React.useState('');
  const handleChange = React.useCallback((value) => setValue(value), []);
  const handleClear = React.useCallback(() => setValue(''), []);
  const handleSearch = React.useCallback(() => {
    alert('search click');
  }, []);
  return (
    <ElementGroup direction="column" gap={10}>
      <TextField
        label="Text Label"
        type="text"
        required={true}
        helperText="Test Helper Text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <ElementGroup gap={10}>
        <TextField
          label="Label2"
          type="search"
          value={value}
          SearchProps={{ onClear: handleClear, onSearchClick: handleSearch }}
          onChange={(e) => handleChange(e.target.value)}
        />
        <TextField
          type="search"
          value={value}
          SearchProps={{ onClear: handleClear, onSearchClick: handleSearch }}
          onChange={(e) => handleChange(e.target.value)}
        />
        <Button color="primary">Test</Button>
      </ElementGroup>
    </ElementGroup>
  );
};

export const FormGroup = Template2.bind({});
