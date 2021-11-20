import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import globalStyles from './globalStyles';
import { Global } from '@emotion/react';
import theme from './defs';
import { ToastProvider } from 'react-toast-notifications';
import Toast from '../components/Toast';
import customStyles from './customStyles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const CNSThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <>
      <Global styles={globalStyles} />
      <Global styles={customStyles} />
      <MuiThemeProvider theme={theme}>
        <ToastProvider
          autoDismiss={true}
          components={{ Toast }}
          placement={isDesktop ? 'bottom-right' : 'top-center'}
        >
          {children}
        </ToastProvider>
      </MuiThemeProvider>
    </>
  );
};

export { globalStyles };
