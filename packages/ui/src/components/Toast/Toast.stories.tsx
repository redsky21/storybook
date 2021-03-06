import { Story, Meta } from '@storybook/react';

import Toast from '../Toast';
import ElementGroup from '../ElementGroup';
import Button from '../Button';
import { useToast } from '../../hooks';

export default {
  component: Toast,
  title: 'Components/Toast',
} as Meta;

//π We create a βtemplateβ of how args map to rendering
const TestView: Story = () => {
  const toast = useToast();

  return (
    <div>
      <ElementGroup gap={10}>
        <Button onClick={() => toast('success', 'νμ€νΈ λ©μμ§ μλλ€.')}>Success</Button>
        <Button onClick={() => toast('info', 'νμ€νΈ λ©μμ§ μλλ€.')}>info</Button>
        <Button onClick={() => toast('warning', 'νμ€νΈ λ©μμ§μλλ€.')}>warning</Button>
        <Button onClick={() => toast('error', 'νμ€νΈ λ©μμ§ μλλ€.')}>error</Button>
      </ElementGroup>
    </div>
  );
};

export const TestCase = TestView.bind({});
