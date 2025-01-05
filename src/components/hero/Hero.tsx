'use client';

import { Box, Button, Flex, Text, VStack, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from '_assets/svg';
import { hexToRGB } from '_theme/colors';
import { DownloadIcon } from '@chakra-ui/icons';

export const svgArray = [
  {
    link: 'https://www.facebook.com/',
    icon: <Facebook />,
  },
  {
    link: 'https://www.instagram.com/',
    icon: <Instagram />,
  },
  {
    link: 'https://www.linkedin.com/feed/',
    icon: <Linkedin />,
  },
];

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Flex
      width={'100%'}
      p={'10px'}
      gap={'20px'}
      justifyContent={'space-between'}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}>
      {/* Left Section */}
      <Box
        pl={{ base: '0', md: '20px' }}
        width={{ base: '100%', md: '50%' }}
        textAlign={{ base: 'center', md: 'left' }}>
        <VStack
          spacing={'15px'}
          p={{ base: '20px' }}
          alignItems={{ base: 'center', md: 'flex-start' }}>
          <Text fontSize={'2xl'} fontWeight={'semibold'}>
            {t('HELLO')}
          </Text>
          <Box>
            <Text fontSize={'2xl'} fontWeight={'semibold'}>
              {t('WHO_AM_I')} {''}
              <span style={{ color: '#7456FF' }}>{t('USER_NAME')}</span>
            </Text>
            <Text fontSize={'14px'} fontWeight={'regular'} color={'gray.500'}>
              {t('JOB_TITLE')}
            </Text>
          </Box>
          <Text
            fontSize={'16px'}
            fontWeight={'regular'}
            color={'gray.500'}
            textAlign={{ base: 'center', md: 'justify' }}>
            {t('PORTFOLIO_DESCRIPTION')}
          </Text>
          <Button
            color={'white'}
            _hover={{
              background: 'linear-gradient(to left, #4CA9FF 49%, #3BF686 100%)',
            }}
            rightIcon={<DownloadIcon />}
            _active={{ background: '#000000' }}
            bg={'linear-gradient(to right, #4CA9FF 49%, #3BF686 100%)'}>
            {t('DOWNLOAD_CV')}
          </Button>
        </VStack>
      </Box>

      {/* Right Section */}
      <Flex
        width={{ base: '100%', md: '50%' }}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        textAlign={'center'}>
        <Image
          src={'/assets/images/picture.png'}
          alt={'hero'}
          width={350}
          height={100}
          style={{ borderRadius: '50%' }}
        />
        <Flex
          width={'100%'}
          pr={{ base: '0', md: '50px' }}
          mt={{ base: '20px', md: '0' }}
          alignItems={'center'}
          gap={'20px'}
          justifyContent={'center'}>
          <Text>{t('FIND_ME_ON')}</Text>
          {svgArray.map((item, index) => (
            <Link key={index} href={item?.link} isExternal>
              <Flex
                gap={'20px'}
                borderRadius={'50px'}
                alignItems={'center'}
                justifyContent={'center'}
                width={'45px'}
                height={'45px'}
                bgColor={hexToRGB('primary', 0.2)}
                _hover={{ bgColor: hexToRGB('primary', 0.4) }}>
                <div>{item?.icon}</div>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
