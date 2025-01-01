'use client';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import {theme} from '_theme/customTheme'

export function CustomProvider({ children }: { children: React.ReactNode }) {
  const themeExtended = theme();
  return <ChakraProvider theme={themeExtended}>{children}</ChakraProvider>;
}
