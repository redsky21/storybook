import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import Skeleton, { TSkeletonProps } from './Skeleton';

export default {
  component: Skeleton,
  title: 'Components/Skeleton',
} as Meta;

//👇 We create a “template” of how args map to rendering
const TestView: Story<TSkeletonProps> = (args) => <Skeleton {...args} />;
const ExampleView = () => (
  <div>
    <PostHeader>
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={200} height={20} style={{ marginLeft: 10 }} />
    </PostHeader>
    <div>
      <Skeleton variant="rect" width={250} height={250} style={{ marginTop: 10 }} />
    </div>
  </div>
);
const ExampleView2 = () => (
  <div>
    <PostHeader>
      <Skeleton variant="circle" width={40} height={40} delay={100} />
      <Skeleton variant="rect" width={200} height={20} delay={200} style={{ marginLeft: 10 }} />
    </PostHeader>
    <div>
      <Skeleton variant="rect" width={250} height={250} delay={300} style={{ marginTop: 10 }} />
    </div>
  </div>
);

export const TestCase = TestView.bind({});
export const ExampleCase1 = ExampleView.bind({});
export const ExampleCase2 = ExampleView2.bind({});

TestCase.args = {
  variant: 'circle',
  width: 40,
  height: 40,
  delay: 0,
};

const PostHeader = styled.div`
  display: flex;
  align-items: center;
`;
