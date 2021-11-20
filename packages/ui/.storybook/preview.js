import React, { useState, useCallback } from 'react';
import { CNSThemeProvider } from '../src/theme';
import { RadioGroup, RadioGroupItem } from '../src/components';

import 'rsuite/DatePicker/styles/index.less';
import 'rsuite/DateRangePicker/styles/index.less';

import './assets/default/reset.css';
import './assets/scss/form.scss';
import './assets/scss/layout.scss';
import './assets/scss/common.scss';
import './assets/scss/customize_material_ui.scss';
import './assets/scss/default.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const [theme, setTheme] = useState('dark');
    const onChangeTheme = useCallback((newVal) => {
      setTheme(newVal);
    }, []);

    return (
      <CNSThemeProvider>
        <div
          style={{ padding: '1rem', height: '50vh', overflowY: 'auto' }}
          className={theme === 'dark' ? 'theme-dark' : ''}
        >
          <div style={{ marginBottom: '2rem' }}>
            <RadioGroup name="theme" value={theme} onChange={onChangeTheme}>
              <RadioGroupItem value="dark" label="RedBlack Theme" />
              <RadioGroupItem value="light" label="Pastel Theme" />
            </RadioGroup>
          </div>

          <div style={{ minHeight: '200vh' }}>
            <Story />
          </div>
        </div>
      </CNSThemeProvider>
    );
  },
];
