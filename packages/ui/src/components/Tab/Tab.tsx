import styled from '@emotion/styled';
import cn from 'classnames';
import React from 'react';
import colors from '../../theme/colors';
import { TabContext } from './Tab.context';

type Props = {
  value?: string;
  initialValue?: string;
  onChange?: (val: string) => void;
  hideDivider?: boolean;
  gap?: number | string;
  WrapperProps?: Record<string, any>;
};
export type TTabProps = React.PropsWithChildren<
  Props & Omit<React.HTMLAttributes<any>, keyof Props>
>;

type TTabItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

export default function Tab({
  initialValue,
  hideDivider = false,
  gap = 10,
  children,
  WrapperProps = {},
  ...rest
}: TTabProps) {
  const [value, setValue] = React.useState(initialValue ?? '');
  const handleClick = React.useCallback((val) => {
    setValue(val);
  }, []);

  const [tabs, setTabs] = React.useState<TTabItem[]>([]);
  const register = React.useCallback((tab) => {
    setTabs((prev) => {
      const hasItem = prev.find((item) => item.value === tab.value);
      return hasItem ? prev : [...prev, tab];
    });
  }, []);

  WrapperProps = {
    ...WrapperProps,
    className: cn('cnsui-tab', WrapperProps['className']),
  };

  return (
    <TabContext.Provider value={{ register, currentValue: value }}>
      <Wrapper {...WrapperProps}>
        <TabNav gap={gap} hideDivider={hideDivider}>
          {tabs.map(({ label, value: itemValue, disabled }) => (
            <TabNavItem
              role="button"
              onClick={() => !disabled && handleClick(itemValue)}
              key={itemValue}
              isActive={value === itemValue}
              disabled={disabled}
            >
              {label}
            </TabNavItem>
          ))}
        </TabNav>

        <TabPanel>{children}</TabPanel>
      </Wrapper>
    </TabContext.Provider>
  );
}

const Wrapper = styled.div``;
const TabNav = styled.ul<{ gap?: number | string; hideDivider?: boolean }>`
  display: flex;
  list-style: none;
  border-bottom: 1px solid
    ${({ hideDivider = false }) => (hideDivider ? 'transparent' : 'rgba(0, 0, 0, 0.1)')};
  li + li {
    margin-left: ${({ gap }) => (typeof gap === 'number' ? `${gap}px` : gap)};
  }
`;

const TabNavItem = styled.li<{ isActive?: boolean; disabled?: boolean }>`
  border-bottom: 2px solid transparent;
  padding: 0.5rem 0 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;
  margin-bottom: -1.5px;
  color: #555;
  ${({ isActive }) =>
    isActive &&
    `
    color: ${colors['secondary-500']};
    .theme-dark & {
      color: ${colors['primary-500']};
    }
    border-bottom-color: currentColor;
    font-weight: bold;
  `};
  ${({ disabled }) =>
    disabled &&
    `
      color: #bbb;
      cursor: not-allowed;
  `};
`;
const TabPanel = styled.div`
  padding: 1rem 0;
  font-size: 1.5rem;
`;
