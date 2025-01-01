import type { StyleConfig } from '@chakra-ui/react';

export const TextStyles: Record<string, StyleConfig> = {
  Text: {
    baseStyle: {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.8',
    },
    variants: {
      'panel-title': {
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'primary.500',
        size: 'md',
      },
      'helper-text': {
        fontSize: 'sm',
        fontWeight: '500',
        color: '#849292',
      },
    },
  },
};
