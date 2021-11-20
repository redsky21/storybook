import { Story, Meta } from '@storybook/react';

import Toast from '../Toast';
import ElementGroup from '../ElementGroup';
import Button from '../Button';
import { useToast } from '../../hooks';

export default {
  component: Toast,
  title: 'Components/Toast',
} as Meta;

//👇 We create a “template” of how args map to rendering
const TestView: Story = () => {
  const toast = useToast();

  return (
    <div>
      <ElementGroup gap={10}>
        <Button onClick={() => toast('success', '테스트 메시지 입니다.')}>Success</Button>
        <Button onClick={() => toast('info', '테스트 메시지 입니다.')}>info</Button>
        <Button onClick={() => toast('warning', '테스트 메시지입니다.')}>warning</Button>
        <Button onClick={() => toast('error', '테스트 메시지 입니다.')}>error</Button>
      </ElementGroup>
    </div>
  );
};

export const TestCase = TestView.bind({});
