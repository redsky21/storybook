import React, { useMemo } from 'react';
import cn from 'classnames';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker, { DatePickerProps } from '@mui/lab/DatePicker';
import TextField from '../TextField';
import { styled as muiStyled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

type __Props = {
  label?: string;
  labelAlign?: 'left' | 'right';
  labelWidth?: number | string;
  required?: boolean;
  error?: boolean;
  WrapperProps?: Record<string, any>;
  disableMonthPicker?: boolean;
};
export type TYearPickerProps = __Props &
  Omit<DatePickerProps, keyof __Props | 'renderInput' | 'views'>;

const usePaperStyles = makeStyles({
  root: {
    '& .YearMonthPicker-wrap': {
      width: 'auto',
      '& .css-1da32r4-MuiFormControl-root-MuiTextField-root': {
        '& .MuiInput-root': {
          marginRight: '0',
        },
      },
      '& .MuiMonthPicker-root': {
        backgroundColor: 'purple',
        '& .css-1dozdou': {
          '& .css-k008qs': {
            display: 'none',
          },
        },
      },
      '& .MuiCalendarPicker-viewTransitionContainer': {
        '& .MuiMonthPicker-root': {
          '& .MuiTypography-root': {
            border: '1px solid gray',
          },
        },
      },
      '& .css-epd502': {},
      '& .MuiCalendarPicker-root': {
        '.PrivatePickersYear-yearButton': {
          fontSize: '1.4rem',
        },
      },
    },
  },
});

function YearPicker({
  value,
  onChange,
  label,
  labelAlign,
  labelWidth,
  required,
  error,
  disableMonthPicker = true,
  WrapperProps = {},
  ...rest
}: TYearPickerProps) {
  WrapperProps = {
    ...WrapperProps,
    className: cn('cnsui-yearpicker', WrapperProps['className']),
  };

  const views = useMemo<DatePickerProps['views']>(() => {
    const output = ['year'];
    if (!disableMonthPicker) {
      output.push('month');
    }
    return output as DatePickerProps['views'];
  }, [disableMonthPicker]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={views}
        value={value}
        onChange={onChange}
        PopperProps={{ style: popperStyle }}
        renderInput={(params) => {
          return (
            <StyledTextField
              {...params}
              {...{ label, labelAlign, labelWidth, required, error, WrapperProps }}
              helperText={null}
            />
          );
        }}
        {...rest}
      />
    </LocalizationProvider>
  );
}

export default YearPicker;

const popperStyle = {};

const StyledTextField = muiStyled(TextField)({
  '.YearMonthPicker-wrap &': {
    '& .MuiInput-root': {
      marginRight: '7.5rem',
      '& .MuiInputBase-input': {
        width: '12rem',
      },
    },
  },
  '&': {
    '& .MuiInput-root': {
      marginRight: '10rem',
      '& .MuiInputBase-input': {
        width: '10rem',
        paddingRight: '0',
        color: 'var(--rs-text-secondary)',
        fontWeight: '400',
      },
      '& button.MuiIconButton-root': {
        width: '3.2rem',
        height: '3.2rem',
        padding: '0',
        minWidth: 'initial',
        margin: '0',
        borderRadius: '3.2rem',
        '& .MuiSvgIcon-root': {
          marginTop: '2px',
          color: 'var(--rs-text-secondary)',
          fontSize: '1.6rem',
        },
      },
    },
  },
});
