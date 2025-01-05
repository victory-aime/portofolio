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
    <Box bg="#0F0F0F" width="100%" p={{ base: '20px', md: '30px' }}>
      {/* Main Footer Content */}
      <Flex
        width="100%"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="flex-start"
        justifyContent="space-between"
        gap={{ base: '20px', md: '30px' }}>
        {/* Contact Section */}
        <Box width="100%">
          <VStack alignItems="flex-start" spacing="20px">
            <Text fontSize={{ base: '16px', md: '18px' }}>
              {t('COMMON.QUESTIONS')}
            </Text>
            <VStack spacing="15px" alignItems="flex-start">
              <Flex
                opacity={0.5}
                alignItems="center"
                justifyContent="flex-start"
                gap="8px">
                <PhoneIcon />
                <Link
                  href="tel:+21651719140"
                  fontSize={{ base: '14px', md: '16px' }}>
                  +216 51 719 140
                </Link>
              </Flex>
              <Flex
                opacity={0.5}
                alignItems="center"
                justifyContent="flex-start"
                gap="8px">
                <EmailIcon />
                <Link
                  href="mailto:victorydarnelmbenze@gmail.com"
                  fontSize={{ base: '14px', md: '16px' }}>
                  victorydarnelmbenze@gmail.com
                </Link>
              </Flex>
            </VStack>
          </VStack>

          {/* Social Media Links */}
          <Flex
            width="100%"
            mt="30px"
            alignItems="center"
            gap="15px"
            justifyContent={{ base: 'center', md: 'flex-start' }}
            flexWrap="wrap">
            <Text fontSize={{ base: '14px', md: '16px' }}>
              {t('FIND_ME_ON')}
            </Text>
            {svgArray.map((item, index) => (
              <Link key={index} href={item?.link} isExternal>
                <Flex
                  gap="20px"
                  borderRadius="50%"
                  alignItems="center"
                  justifyContent="center"
                  width="45px"
                  height="45px"
                  bgColor={hexToRGB('primary', 0.2)}
                  transition="transform 0.2s"
                  _hover={{ transform: 'scale(1.1)' }}>
                  {item?.icon}
                </Flex>
              </Link>
            ))}
          </Flex>
        </Box>

        {/* Footer Image */}
        <Box display={{ base: 'none', md: 'block' }}>
          <Image
            src={FooterImgae}
            alt="footer-img"
            loading="lazy"
            width={300}
            height={300}
          />
        </Box>
      </Flex>

      {/* Footer Bottom Text */}
      <Center mt="50px" textAlign="center">
        <Text fontSize={{ base: '14px', md: '16px' }}>
          Copyright ©2025 All rights reserved | designed by{' '}
          <span style={{ color: '#7456FF' }}>darnel victory</span>
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
