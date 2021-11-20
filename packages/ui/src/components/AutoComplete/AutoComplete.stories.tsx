import React from 'react';
import { Story, Meta } from '@storybook/react';
import AutoComplete from './AutoComplete';
import ElementGroup from '../ElementGroup';

export default {
  component: AutoComplete,
  title: 'Components/AutoComplete',
} as Meta;

const Template1: Story = (args) => {
  const [value, setValue] = React.useState<any>(null);
  const onChange = (__: any, option: any) => {
    setValue(option);
  };

  return (
    <ElementGroup gap={10}>
      <AutoComplete
        label="Affilication"
        labelWidth="10.5rem"
        required={true}
        value={value}
        onChange={onChange}
        TextFieldProps={{
          width: '24rem',
        }}
        options={[
          { value: '1', label: 'abc' },
          { value: '2', label: 'abd' },
          { value: '3', label: 'abe' },
        ]}
        {...args}
      />
    </ElementGroup>
  );
};

export const GeneralView = Template1.bind({});
