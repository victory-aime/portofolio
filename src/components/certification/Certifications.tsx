'use client';

import React from 'react';
import { Box, Text, VStack, Flex, Center, Link } from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const { t } = useTranslation();
  return (
    <Box p={'30px'} width={'100%'}>
      <VStack spacing={'12px'} alignItems={'flex-start'}>
        <Box>
          <Text fontSize={'24px'}>
            {t('MY')}{' '}
            <span
              style={{
                color: '#7456FF',
              }}>
              {t('CERTIFICATION')}
            </span>
          </Text>
          <Box
            width={'70px'}
            borderColor={'primary.500'}
            borderBottomWidth={'12px'}
            borderRadius={'12px'}
          />
        </Box>
        <Box width={'600px'}>
          <Text fontSize={'14px'} fontWeight={'regular'} color={'gray.500'}>
            {t('CERTIF_DESC')}
          </Text>
        </Box>
      </VStack>
      <Center>
        <Box
          p={'20px'}
          borderRadius={'12px'}
          mt={'20px'}
          borderWidth={3}
          borderColor={'linear-gradient(to left, #4CA9FF 49%, #3BF686 100%)'}>
          <Box width={'450px'}>
            <Image
              src={
                'https://www.actuia.com/wp-content/uploads/2022/03/Meta-construction-metavers-Intelligence-Artificielle-1068x534.png'
              }
              loading="lazy"
              alt="meta-img"
              style={{ borderRadius: 8 }}
              width={100}
              height={100}
            />
            <VStack
              spacing={'20px'}
              alignItems={'flex-start'}
              mt={'10px'}
              justifyContent={'center'}>
              <Text fontSize={'22px'} fontWeight={'medium'}>
                Meta Front-End{' '}
                <span style={{ color: '#7456FF' }}>Developer</span>
              </Text>
              <Text>{t('META')}</Text>
            </VStack>
            <Flex
              alignItems={'flex-end'}
              justifyContent={'flex-end'}
              mt={'20px'}>
              <Link
                bg={'linear-gradient(to right, #4CA9FF 49%, #3BF686 100%)'}
                alignItems={'center'}
                justifyContent={'center'}
                p={'10px'}
                borderRadius={'7px'}
                _hover={{
                  textDecoration: 'none',
                  background:
                    'linear-gradient(to left, #4CA9FF 49%, #3BF686 100%)',
                }}
                href={
                  'https://coursera.org/share/6a23692fa36b57a2946d9869314a26db'
                }>
                {t('COMMON.VIEW_CERTIFICATE')}
              </Link>
            </Flex>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Certifications;
