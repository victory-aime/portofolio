'use client';

import { Box, Flex, HStack, Select, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <Box p={'10px'} bgColor={'#0F0F0F'} w={'100%'}>
      <Flex p={'10px'} alignItems={'center'} justifyContent={'space-between'}>
        <Box width={'100%'}>
          <Box>
            <Text fontSize={'2xl'} fontWeight={'bold'}>
              {t('MY')}
              <span style={{ color: '#7456FF' }}>{t('PORTFOLIO')}</span>{' '}
            </Text>
          </Box>
        </Box>
        <Flex p={'5px'} bgColor={'yellow.500'} width={'100%'}>
          {Array.from({ length: 5 }).map((_, index) => (
            <HStack width={'100%'} key={index} spacing={'10px'}>
              <Box>{index}</Box>
            </HStack>
          ))}
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
