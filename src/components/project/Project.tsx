'use client';

import React from 'react';
import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react';
import { hexToRGB } from '_theme/colors';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { useAnimateOnScroll } from '_app/hooks/useAnimateOnScroll';
import { serviceData } from '_/data/data';

function Project() {
  const { t } = useTranslation();
  const { ref, inView } = useAnimateOnScroll('project');

  return (
    <Flex
      ref={ref}
      alignItems={'flex-start'}
      p={{ base: '20px', md: '30px' }}
      opacity={inView ? 1 : 0}
      transform={inView ? 'translateY(0)' : 'translateY(20px)'}
      transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      width={'100%'}
      gap={{ base: '20px', md: '30px' }}
      flexDirection={'column'}>
      <VStack
        spacing={'12px'}
        width={'100%'}
        alignItems={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}>
        <Box>
          <Text fontSize={'24px'}>
            {t('MY')} {''}
            <span
              style={{
                color: '#7456FF',
              }}>
              {t('PROJECT.TITLE')} {''}
            </span>
          </Text>
          <Box
            width={'70px'}
            borderColor={'primary.500'}
            borderBottomWidth={'12px'}
            borderRadius={'12px'}
            margin={{ base: '0 auto', md: '0' }}
          />
        </Box>

        <Box width={{ base: '100%', md: '600px' }}>
          <Text fontSize={'14px'} fontWeight={'regular'} color={'gray.500'}>
            {t('PROJECT.DESC')}
          </Text>
        </Box>
      </VStack>
      <Flex
        flexDirection={'column'}
        width={'100%'}
        gap={'20px'}
        alignItems={'flex-end'}
        justifyContent={'flex-end'}>
        <Flex
          width={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'20px'}
          flexWrap={'wrap'}>
          {serviceData?.map((item, index) => (
            <Box
              key={index}
              borderRadius={'12px'}
              p={'12px'}
              bgColor={hexToRGB('primary', 0.03)}
              borderWidth={2}
              _hover={{ backgroundColor: 'primary.500' }}
              borderColor={'linear-gradient(180deg, #4CA9FF 49%, #3BF686 100%)'}
              width={'350px'}
              style={{ animationDelay: `${index * 0.3}s` }}>
              <VStack
                alignItems={'flex-start'}
                justifyContent={'center'}
                spacing={'10px'}>
                <div>{item?.icon}</div>
                <Text fontSize={'20px'}>{t(item?.title)}</Text>
                <Text fontSize={'12px'}>{t(item?.desc)}</Text>
              </VStack>
            </Box>
          ))}
        </Flex>
        <Flex alignItems={'flex-end'} justifyItems={'flex-end'} mr={'40px'}>
          <Link
            bg={'linear-gradient(to right, #4CA9FF 49%, #3BF686 100%)'}
            alignItems={'center'}
            justifyContent={'center'}
            p={'10px'}
            width={'120px'}
            borderRadius={'7px'}
            _hover={{
              textDecoration: 'none',
              background: 'linear-gradient(to left, #4CA9FF 49%, #3BF686 100%)',
            }}
            href={'https://github.com/victory-aime?tab=repositories'}>
            <Flex alignItems={'center'} justifyContent={'center'} gap={'10px'}>
              <Text>{t('COMMON.SEE_ALL')}</Text>
              <ArrowRightIcon fill={'white'} width={'12px'} height={'12px'} />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Project;
