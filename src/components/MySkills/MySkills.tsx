'use client';
import React from 'react';
import { Box, Text, Flex, VStack } from '@chakra-ui/react';
import { Carousel } from '../chakra-carousel';
import { CAROUSEL_TYPE } from '../chakra-carousel/caroussel.model';
import Image from 'next/image';
import { hexToRGB } from '_/theme/colors';
import { useTranslation } from 'react-i18next';
import { skillsArray } from '_/data/data';
import { useAnimateOnScroll } from '_app/hooks/useAnimateOnScroll';

function MySkills() {
  const { t } = useTranslation();
  const { ref, inView } = useAnimateOnScroll('skills');

  return (
    <Flex
      ref={ref}
      alignItems={'flex-start'}
      opacity={inView ? 1 : 0}
      transform={inView ? 'translateY(0)' : 'translateY(20px)'}
      transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      p={'30px'}
      width={'100%'}
      gap={'30px'}
      flexDirection={'column'}>
      <VStack
        spacing={'12px'}
        alignItems={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}>
        <Box>
          <Text fontSize={{ base: '20px', md: '24px' }}>
            {t('MY')}{' '}
            <span
              style={{
                color: '#7456FF',
              }}>
              {t('COMMON.TOOLS')}
            </span>{' '}
            {t('COMMON.AND')}{' '}
            <span
              style={{
                color: '#7456FF',
              }}>
              {t('SKILLS')}
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
            {t('TOOLS')}
          </Text>
        </Box>
      </VStack>

      <Box
        width={'100%'}
        p={'20px'}
        borderRadius={'8px'}
        boxShadow={'2xl'}
        shadow={'lg'}
        bgColor={hexToRGB('primary', 0.03)}>
        <Box
          width={'100%'}
          p={'30px'}
          borderRadius={'12px'}
          borderWidth={3}
          borderColor={'linear-gradient(to right, #4CA9FF 49%, #3BF686 100%)'}>
          <Carousel
            type={CAROUSEL_TYPE.HORIZONTAL}
            onChange={() => {}}
            withControl={false}
            isInfinite={true}
            itemPerSlide={3}>
            {skillsArray?.map((_, index) => (
              <Flex key={index}>
                <Image src={_} alt={'skills'} width={200} height={200} />
              </Flex>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Flex>
  );
}

export default MySkills;
