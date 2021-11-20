import React from 'react';
import { useTabContext } from './Tab.context';

type Props = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type TTabItemProps = React.PropsWithChildren<
  Props & Omit<React.HTMLAttributes<any>, keyof Props>
>;

export default function TabItem({
  label,
  value,
  disabled = false,
  children,
  ...rest
}: TTabItemProps) {
  const { register, currentValue } = useTabContext();
  React.useEffect(() => {
    register({ value, label, disabled });
  }, []);
  const isActive = React.useMemo(() => currentValue === value, [currentValue, value]);

  return isActive ? <React.Fragment>{children}</React.Fragment> : null;
}
