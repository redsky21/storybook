import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import MuiModal, { ModalProps as MuiModalProps } from '@mui/material/Modal';
import { useSpring, animated } from '@react-spring/web';
import styled from '@emotion/styled';

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
  duration?: number;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, duration } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    config: { duration },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style}>
      {children}
    </animated.div>
  );
});

type BaseModalProps = Partial<MuiModalProps>;
export type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
  ModalProps?: BaseModalProps;
  FadeProps?: Omit<FadeProps, 'in'>;
};

export default function Modal({
  isOpen,
  onClose,
  ModalProps,
  style,
  children,
  FadeProps,
}: TModalProps) {
  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition={true}
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 200 }}
      {...ModalProps}
    >
      <Fade
        // in: override 불가
        in={isOpen}
        // duration: override 가능, default: 100
        duration={200}
        {...FadeProps}
      >
        <Window style={style}>{children}</Window>
      </Fade>
    </MuiModal>
  );
}

const Window = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  min-width: 30rem;
  background-color: #fff;
  padding: 0;
  border-radius: 2rem;
`;
