'use client';

import React from 'react';
import { Box, Text, Flex, Center, VStack, Link } from '@chakra-ui/react';
import Image from 'next/image';
import { FooterImgae } from '_assets/images';
import { useTranslation } from 'react-i18next';
import { hexToRGB } from '_theme/colors';
import { svgArray } from '../hero/Hero';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box bg={'#0F0F0F'} width={'100%'} p={'30px'}>
      <Flex
        width={'100%'}
        alignItems={'flex-start'}
        justifyContent={'space-between'}>
        <Box width={'100%'}>
          <VStack alignItems={'flex-start'} spacing={'20px'}>
            <Text>{t('COMMON.QUESTIONS')}</Text>
            <VStack spacing={'15px'} alignItems={'flex-start'}>
              <Flex
                opacity={0.5}
                alignItems={'center'}
                justifyContent={'center'}
                gap={'8px'}>
                <PhoneIcon />
                <Link href={'mailTo:+21651719140'}>+216 51 719 140</Link>
              </Flex>
              <Flex
                opacity={0.5}
                alignItems={'center'}
                justifyContent={'center'}
                gap={'8px'}>
                <EmailIcon />
                <Link href={'mailTo:victorydarnelmbenze@gmail.com'}>
                  victorydarnelmbenze@gmail.com
                </Link>
              </Flex>
            </VStack>
          </VStack>
          <Flex
            width={'100%'}
            pr={'50px'}
            mt={'30px'}
            alignItems={'center'}
            gap={'20px'}
            justifyContent={'flex-start'}>
            <Text>{t('FIND_ME_ON')}</Text>
            {svgArray.map((item, index) => (
              <Link key={index} href={item?.link}>
                <Flex
                  gap={'20px'}
                  borderRadius={'50px'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  width={'45px'}
                  height={'45px'}
                  bgColor={hexToRGB('primary', 0.2)}>
                  <div>{item?.icon}</div>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Box>
        <Box>
          <Image
            src={FooterImgae}
            alt={'footer-img'}
            loading={'lazy'}
            width={300}
            height={300}
          />
        </Box>
      </Flex>
      <Center mt={'50px'}>
        <Text>
          Copyright ©2025 All rights reserved | designed by{' '}
          <span
            style={{
              color: '#7456FF',
            }}>
            darnel victory
          </span>
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
