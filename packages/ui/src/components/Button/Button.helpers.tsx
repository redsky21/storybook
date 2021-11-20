import colors from '../../theme/colors';
import { TButtonProps } from './Button';

export const generateButtonColorStyles = ({
  variant,
  color,
}: Pick<TButtonProps, 'variant' | 'color'>) => {
  if (variant === 'contained') {
    switch (color) {
      case 'primary': {
        return {
          color: 'rgba(0,0,0,.9) !important',
          backgroundColor: colors[`secondary-500`],
          '&:hover': {
            backgroundColor: colors[`secondary-400`],
          },
          '&:active': {
            backgroundColor: colors[`secondary-300`],
          },
          '.theme-dark &': {
            color: 'hsla(0,0%,100%,.9) !important',
            backgroundColor: colors[`primary-500`],
            '&:hover': {
              backgroundColor: colors[`primary-400`],
            },
            '&:active': {
              backgroundColor: colors[`primary-300`],
            },
          },
        };
      }
      case 'primary-reverse': {
        return {
          color: colors['primary-500'],
          backgroundColor: colors['primary-100'],
        };
      }
      case 'normal': {
        return {
          color: `${colors['gray-800']} !important`,
          backgroundColor: colors['gray-200'],
          '.theme-dark &': {
            color: 'hsla(0,0%,100%,.9) !important',
            backgroundColor: colors['gray-500'],
          },
        };
      }
      default: {
        return {};
      }
    }
  } else if (variant === 'outlined') {
    switch (color) {
      case 'primary': {
        return {
          color: colors['primary-500'],
          border: '1px solid currentColor',
          '&:active': {
            opacity: 0.75,
          },
        };
      }
      case 'primary-reverse': {
        return {
          color: colors['primary-100'],
          border: '1px solid currentColor',
        };
      }
      case 'normal': {
        return {
          color: '#666',
          border: '1px solid currentColor',
          '&:active': {
            opacity: 0.75,
          },
        };
      }
      default: {
        return {};
      }
    }
  } else {
    return {};
  }
};

const fontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  inherit: 14,
};

export const generateButtonSizeStyles = ({ size = 'md' }: Pick<TButtonProps, 'size'>) => ({
  fontSize: fontSize[size],
  padding: size === 'inherit' ? '0' : '0.5em 0.9em',
});
