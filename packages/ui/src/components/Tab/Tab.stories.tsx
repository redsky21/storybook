import React from 'react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import Tab, { TTabProps } from './';

export default {
  component: Tab,
  title: 'Components/Tab',
} as Meta;

const TestView: Story<TTabProps> = (args) => {
  return (
    <Tab initialValue="2" hideDivider={true} {...args}>
      <Tab.Item label="첫번째 탭입니다" value="1" disabled={true}>
        aaa
      </Tab.Item>
      <Tab.Item label="두번째 탭입니다" value="2">
        bbb
      </Tab.Item>
      <Tab.Item label="세번째 탭입니다" value="3">
        ccc
      </Tab.Item>
      <Tab.Item label="네번째 탭입니다" value="4">
        ddd
      </Tab.Item>
    </Tab>
  );
};

export const TestCase = TestView.bind({});
