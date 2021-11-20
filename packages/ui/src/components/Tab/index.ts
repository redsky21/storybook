import Tab from './Tab';
import TabItem from './TabItem';

export type TabsComponentType = typeof Tab & {
  Item: typeof TabItem;
};
(Tab as TabsComponentType).Item = TabItem;

export type { TTabProps } from './Tab';
export default Tab as TabsComponentType;
