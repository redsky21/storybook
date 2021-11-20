import { Story, Meta } from '@storybook/react';
import Button, { TButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    onClick: {
      action: 'clicked!',
    },
  },
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'md',
    children: 'Submit',
    disabled: false,
    isLoading: false,
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Button {...args} />;

export const Cases = Template.bind({});
Cases.parameters = {
  controls: {
    include: ['color', 'variant', 'size', 'children', 'disabled', 'isLoading', 'onClick'],
  },
};
Cases.storyName = 'Default';
Cases.args = {
  color: 'primary',
  variant: 'contained',
  size: 'md',
  children: 'Submit',
  disabled: false,
  isLoading: false,
};
