import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { ErrorFallback, PendingFallback, NoResultFallback } from '.';
import Fallback from './Fallback';

export default {
  component: Fallback,
  title: 'Components/Fallback',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = () => {
  return (
    <div style={{ width: 500 }}>
      <div>
        <h1>Error Fallback</h1>
        <ErrorFallback />
      </div>
      <div>
        <h1>PendingFallback</h1>
        <PendingFallback />
      </div>
      <div>
        <h1>NoResultFallback</h1>
        <NoResultFallback />
      </div>
    </div>
  );
};

export const Cases = Template.bind({});
