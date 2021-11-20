import { Story, Meta } from '@storybook/react';
import OverlaySpinner from './OverlaySpinner';

export default {
  component: OverlaySpinner,
  title: 'Components/OverlaySpinner',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <OverlaySpinner {...args} />;

export const Cases = Template.bind({});
