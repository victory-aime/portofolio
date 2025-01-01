import { extendTheme } from '@chakra-ui/react';
import breakpoints from './breakpoints';
import { colors } from './colors';
import { fontSizes, lineHeights } from './fontSize';
import { TextStyles } from './TextStyle';
import StyledTooltip from './ToolTipStyle';

export const theme = () => {
  return extendTheme({
    colors,
    fonts: {
      body: 'var(--font-poppins), sans-serif',
      heading: 'var(--font-poppins), sans-serif',
    },
    fontSizes,
    lineHeights,
    breakpoints,
    styles: {
      global: () => ({
        html: {
          fontSize: '16px',
          WebkitUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
        },
        body: {
          backgroundColor: 'black',
          color: 'white',
        },
        _focus: {
          boxShadow: 'none !important',
        },
        _dataFocus: {
          boxShadow: 'none !important',
        },
        '&::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
          height: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(194, 199, 202, 1)',
          borderRadius: '24px',
        },
        input: {
          '&::-webkit-calendar-picker-indicator': {
            width: '11px',
            backgroundSize: 'contain',
          },
        },
        label: {
          _disabled: {
            opacity: '1 !important',
          },
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          color: 'white',
        },
        variants: {
          solid: () => ({
            bgColor: 'primary.500',
          }),
        },
      },
      ...StyledTooltip,
      ...TextStyles,
    },
  });
};

export default theme;
