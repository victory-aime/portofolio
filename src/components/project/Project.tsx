'use client';

import React from 'react';
import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react';
import { hexToRGB } from '_/theme/colors';
import { BookIcon } from '_assets/svg';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { keyframes } from '@emotion/react';

function Project() {
  const { t } = useTranslation();

  const zoomRotate = keyframes`
    from { opacity: 0; transform: scale(0.8) rotate(-10deg); }
    to { opacity: 1; transform: scale(1) rotate(0deg); }
  `;

  const zoomRotateAnimation = `${zoomRotate} 0.8s ease-in-out forwards`;

  const svgArray = [
    {
      icon: <BookIcon />,
      title: 'PROJECT.FEATURES.SAAS_SCHOOL_APP',
      desc: 'PROJECT.FEATURES.SAAS_SCHOOL_DESC',
    },
    {
      icon: <BookIcon />,
      title: 'PROJECT.FEATURES.RENTAL_APP',
      desc: 'PROJECT.FEATURES.RENTAL_APP_DESC',
    },
    {
      icon: <BookIcon />,
      title: 'PROJECT.FEATURES.BVG_APP',
      desc: 'PROJECT.FEATURES.BVG_APP_DESC',
    },
  ];

  return (
    <Flex
      alignItems={'flex-start'}
      p={{ base: '20px', md: '30px' }}
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
        </Box>
        <Box width={{ base: '100%', md: '600px' }}>
          <Text
            textAlign={'center'}
            fontSize={'14px'}
            fontWeight={'regular'}
            color={'gray.500'}>
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
          {svgArray?.map((item, index) => (
            <Box
              key={index}
              borderRadius={'12px'}
              p={'12px'}
              bgColor={hexToRGB('primary', 0.03)}
              borderWidth={2}
              _hover={{ backgroundColor: 'primary.500' }}
              borderColor={'linear-gradient(180deg, #4CA9FF 49%, #3BF686 100%)'}
              width={'300px'}
              animation={zoomRotateAnimation}
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
