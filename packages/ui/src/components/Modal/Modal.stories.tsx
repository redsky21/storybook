import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '../Button';
import Modal, { TModalProps } from './Modal';
import ElementGroup from '../ElementGroup';
import styled from '@emotion/styled';

export default {
  component: Modal,
  title: 'Components/Modal',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<TModalProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="contained" color="normal" size="lg" onClick={() => setOpen(true)}>
        Modal Open
      </Button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <HeaderTitle>Header Title</HeaderTitle>
        <BodyContent>
          Body Content Body Content Body Content Body Content Body Content Body Content Body Content
          Body Content Body Content Body Content Body Content Body Content Body Content Body Content
          Body Content Body Content Body Content Body Content Body Content Body Content Body Content
          Body Content Body Content
        </BodyContent>

        <div style={{ padding: '2rem' }}>
          <ElementGroup gap={5} isAlignedRight={true}>
            <Button
              variant="contained"
              size="md"
              color="primary"
              onClick={() => {
                alert('confirm');
                setOpen(false);
              }}
            >
              Confirm
            </Button>
            <Button
              variant="contained"
              size="md"
              color="inherit"
              onClick={() => {
                alert('cancel');
                setOpen(false);
              }}
            >
              Cancel
            </Button>
          </ElementGroup>
        </div>
      </Modal>
    </div>
  );
};

export const Cases = Template.bind({});

const HeaderTitle = styled.div`
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const BodyContent = styled.div`
  padding: 20px;
  line-height: 1.6;
  font-weight: 300;
  font-size: 16px;
`;
