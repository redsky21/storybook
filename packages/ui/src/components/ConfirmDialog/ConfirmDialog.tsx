import React from 'react';
import styled from '@emotion/styled';
import { Button, ElementGroup, Modal } from '..';

export type TConfirmDialogProps = {
  isOpen: boolean;
  onClose: () => any;
  children: React.ReactNode;
  onConfirm?: (onClose: () => any) => any;
  onCancel?: (onClose: () => any) => any;
  confirmText?: string;
  cancelText?: string;
};

function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm = onClose,
  onCancel,
  confirmText = 'Ok',
  cancelText = 'Cancel',
  children,
}: TConfirmDialogProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ModalProps={{
        disableScrollLock: true,
        disableEscapeKeyDown: true,
      }}
      style={{ borderRadius: '0.5rem', top: '5%', transform: 'translate(-50%, 0)' }}
    >
      <Body>{children}</Body>
      <Footer>
        <ElementGroup gap={5} isAlignedRight={true}>
          {onConfirm && (
            <Button color="primary" onClick={() => onConfirm(onClose)}>
              {confirmText}
            </Button>
          )}
          {onCancel && (
            <Button color="normal" onClick={() => onCancel(onClose)}>
              {cancelText}
            </Button>
          )}
        </ElementGroup>
      </Footer>
    </Modal>
  );
}

export default ConfirmDialog;

const Body = styled.div`
  min-width: 50rem;
  font-size: 1.6rem;
  padding: 1.75rem;
`;
const Footer = styled.div`
  padding: 1.75rem;
`;
