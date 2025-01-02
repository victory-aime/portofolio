'use client';
import React from 'react';
import { Box, Text, Flex, VStack } from '@chakra-ui/react';
import { Carousel } from '../chakra-carousel';
import { CAROUSEL_TYPE } from '../chakra-carousel/caroussel.model';
import Image from 'next/image';
import {
  Css,
  Docker,
  Git,
  GraphQL,
  MongoDB,
  NestJS,
  NextJS,
  NodeJS,
  ReactImage,
  Tailwind,
} from '_assets/images';
import { hexToRGB } from '_/theme/colors';

function MySkills() {
  const imageArray = [
    Css,
    Docker,
    GraphQL,
    NodeJS,
    NestJS,
    NextJS,
    Git,
    MongoDB,
    ReactImage,
    Tailwind,
  ];

  return (
    <Flex
      alignItems={'flex-start'}
      p={'30px'}
      width={'100%'}
      gap={'30px'}
      flexDirection={'column'}>
      <VStack spacing={'12px'} alignItems={'flex-start'}>
        <Box>
          <Text fontSize={'24px'}>
            My{' '}
            <span
              style={{
                color: '#7456FF',
              }}>
              Tools
            </span>{' '}
            and{' '}
            <span
              style={{
                color: '#7456FF',
              }}>
              Skills
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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here
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
            itemPerSlide={1}>
            {imageArray?.map((_, index) => (
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
