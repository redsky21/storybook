import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { ToastProps } from 'react-toast-notifications';
import IconButton from '../IconButton';

const appearanceSpec = {
  success: {
    color: '#52a897',
    image: `data:image/png;base64,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`,
  },
  info: {
    color: '#5a81bd',
    image: `data:image/png;base64,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`,
  },
  warning: {
    color: '#ffce65',
    image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABCtJREFUeNrsm81LVGEUh899TQqVClPKpHJT9IFCRh8UtgirlRXUwnaRZLXMTa6kQKEGCsq0yH+goBbtK4JatNI2fUBtRaGIWhQttDrHmULGO+Pce97P63ngcMdxHO/9zY/X68O9AIIgCIKgiT/j51birA1tv1VgIZ/AzTTOFD7OhbTvUUAhN+DmA86aeU93Ru1jz6TReskVhUyM4gewXILW1+YO3JyJ+dYWnMuydOgJuRo3Ezg7SrzkF04rLiGfpNE8+sqETKzAGZFG89q8CTdvcWoreHk3tvqhNDodwxWGTNykc2wJOnmbj+OmK8GPrMcZlKUjWch1hSVjY8IfncXZg0vIuDS6MgZShExU4dzDD6pKgl68za24ucR4i90452XpKB8y7c9LnAPMt/qGsw2XkGlpdDxnNYRMrKazEGl0fJvjpBEXb6STT43OaQ6Z8EY6KU/aXEoacSHp1C9LB1Qkjbh4IZ18aHSfwZAJL6RT5LjNJI3e4dRY+HVOpZPrRg9bCplwKp2UwzYnlUZcSDoNLamlgyGNuDiTTq4aPeAgZMKZdFIO2syVRlxIOl3I9NKhURpxsS6dbDe6x4OQCevSKbLYZhPSiIs16WSz0TnPQiasSSdlqc0HwYw04mJNOkUWQjYtjbhYkU7LLByIHmm083788xO93Hf+J52OBrt0FKTRAPjPEdzX7pDXaJvSiMsNk9JJGWwzXZ3fBeFgVDopQyGTNLoF4XER9709pEa7kkZcjEknZaDNbeBWGnExIp2U5pDpvHzU0mmjSQbxWNb53GhfpBEX7dJJaWwzSaNrkB1O4zF1+thoH6URlxFd0klparOv0oiLNumkNIRcXfgDGEE26cdj3OxDo01faeQakk53nAaNn3QLhCGNuLClE7fRtyEcacSFJZ0Uo82hSSMuLOmkUoYcqjTiQtJpl81GhyqNuJBsuptGOqkUbQ5dGnFJJZ1UwpCzIo24DCWVTkkbnRVpxGUVJJROKkGbGyFb0ohLIumUpNHXIXvSiEvF0imqsM0kjV5k2GdwuBK1j11lB12QRm9wtkumsdCVTm0Y9kfu0tEnIZelIukULdLmFsjfa+LeZ0R4Rtl8CqB+b363v74GmHyEOznjzR9HbPWDtI32Rxo1nwRoPIT/m9Xi1OQfNx3zqdllb69TZdrslzSq37fwuYYOn4JugjLSSZUIua7QZiEZJaVTqUaTNNrg1SHQmlzMl1e+BV1SOqmYNvspjSYfA3x+DjD7Mz/0eOqJj62OlU5RUcj0NdVkv6wCLL7jbJ1/e11xo3skZC0skE7RvDaTNHovPkMrh7HVT4sbLdJIP/9vr1OFNmf1SiPX0IU3c1c6RSKNjDMnnajRIo3MMnd7HTX6Byydi2CcoSRke0ELEnS2gp6RGIzzWyIQBEEQBEEQBMFb/gowAJ2jO77KVECLAAAAAElFTkSuQmCC`,
  },
  error: {
    color: '#f24851',
    image: `data:image/png;base64,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`,
  },
};

export default function Toast({ appearance = 'info', onDismiss, children }: ToastProps) {
  const title = React.useMemo(
    () => `${appearance[0].toUpperCase()}${appearance.slice(1, appearance.length)} Message`,
    [appearance],
  );
  return (
    <Box appearance={appearance}>
      <span />
      <Content>
        <Header>
          <Title>{title}</Title>
          <IconButton onClick={() => onDismiss('')}>
            <CloseIcon />
          </IconButton>
        </Header>
        <Message>{children}</Message>
      </Content>
    </Box>
  );
}

const Box = styled.div<Pick<ToastProps, 'appearance'>>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  width: 32.5rem;
  border: 1px solid;
  border-radius: 2rem;
  background-color: #fff;
  box-shadow: 0 20px 25px 0 rgb(0 0 0 / 5%);
  margin-bottom: 1rem;
  z-index: 2000;

  border-color: ${({ appearance }) => appearanceSpec[appearance].color};
  & > span {
    display: block;
    width: 3rem;
    height: 3rem;
    margin-right: 1.5rem;
    padding: 0;
    opacity: 0.9;
    background: ${({ appearance }) =>
      `url(${appearanceSpec[appearance].image}) no-repeat 50%/3rem`};
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;

  & > button {
    position: absolute;
    top: -0.75rem;
    right: 0;
    svg {
      font-size: 1.8rem;
    }
  }
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
  line-height: 1;
  margin-bottom: 1rem;
`;

const Message = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  line-height: 1;
  padding: 0;
`;
