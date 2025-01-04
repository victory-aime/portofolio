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
      alignItems={'flex-start'}
      gap={'20px'}
      justifyContent={'space-between'}>
      <Box pl={'20px'} width={'100%'}>
        <VStack spacing={'15px'} alignItems={'flex-start'}>
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
            textAlign={'justify'}>
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
      <Flex
        width={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'30px'}
        flexDirection={'column'}>
        <Image
          src={'/assets/images/picture.png'}
          alt={'hero'}
          width={350}
          height={100}
        />
        <Flex
          width={'100%'}
          pr={'50px'}
          alignItems={'center'}
          gap={'20px'}
          justifyContent={'center'}>
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
      </Flex>
    </Flex>
  );
};

export default Hero;
