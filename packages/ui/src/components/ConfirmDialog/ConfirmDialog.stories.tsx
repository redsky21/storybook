import React from 'react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { Button, ConfirmDialog } from '..';
import { TConfirmDialogProps } from './ConfirmDialog';

export default {
  component: ConfirmDialog,
  title: 'Components/ConfirmDialog',
} as Meta;

const TestView: Story<TConfirmDialogProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>다이얼로그 오픈</Button>
      <ConfirmDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        confirmText="정말 진짜 실행합니다"
        cancelText="취소"
        onCancel={(onClose: any) => onClose()}
      >
        정말 진짜 실행하시겠습니까??
      </ConfirmDialog>
      ;
    </>
  );
};

export const TestCase = TestView.bind({});
