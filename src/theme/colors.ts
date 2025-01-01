// ! IMPORTANT: default color must be 500.

import { theme } from '@chakra-ui/react';

const colors: {
  [color: string]: { [opacity: number]: string } | string;
} = {
  ...theme.colors,
  primary: {
    100: '#f8f6ff',
    200: '#d7ceff',
    300: '#b7a6ff',
    400: '#967eff',
    500: '#7456FF',
    600: '#6645f9',
    700: '#4a26e9',
    800: '#401eda',
    900: '#3e22be',
  },
  secondary: {
    50: '#fff1da',
    100: '#ffd8ae',
    200: '#ffbf7d',
    300: '#ffa64c',
    400: '#ff8c1a',
    500: '#F6A724',
    600: '#b45900',
    700: '#813f00',
    800: '#4f2500',
    900: '#200b00',
  },
  gray: {
    500: '#999999',
  },
};

/**
 * Get the color with the specified opacity.
 * The color in the theme.
 * The opacity value (0 to 100).
 * @returns The RGBA color string with the specified opacity.
 */
const hexToRGB = (color: string, alpha?: number, op?: number) => {
  const hex = getColor(color, op);
  const r = parseInt(hex?.slice(1, 3), 16);
  const g = parseInt(hex?.slice(3, 5), 16);
  const b = parseInt(hex?.slice(5, 7), 16);

  return `rgba(${r},${g},${b}${alpha ? `, ${alpha}` : ''})`;
};

const getColor = (color = 'primary', opacity = 500) => colors[color]?.[opacity];

export { colors, hexToRGB, getColor };
