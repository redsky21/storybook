import React from 'react';

export type TRadioGroupContext = {
  gap?: string | number;
  direction?: 'column' | 'row';
  name?: string;
  value: string | number;
  onChange?: (newVal: string | number) => void;
  hideRadioButton?: boolean;
};

type __RadioGroupProps = {
  labelAlign?: 'left' | 'right';
  labelWidth?: number | string;
  label?: string;
  required?: boolean;
  error?: boolean;
  WrapperProps?: Record<string, any>;
  children?: React.ReactNode;
} & TRadioGroupContext;

export type TRadioGroupProps = __RadioGroupProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof __RadioGroupProps>;

export type TRadioGroupItemProps = {
  label: React.ReactNode;
  disabled?: boolean;
  value: string | number;
  children?: React.ReactNode;
  hidden?: boolean;
};
