'use client';

import React from 'react';
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import { hexToRGB } from '_/theme/colors';
import { BookIcon } from '_assets/svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon } from '@chakra-ui/icons';
function Project() {
  const svgArray = [BookIcon, BookIcon, BookIcon];
  const router = useRouter();
  return (
    <Flex
      alignItems={'flex-start'}
      p={'30px'}
      width={'100%'}
      gap={'30px'}
      flexDirection={'column'}>
      <VStack spacing={'12px'} alignItems={'center'} width={'100%'}>
        <Box>
          <Text fontSize={'24px'}>
            My{' '}
            <span
              style={{
                color: '#7456FF',
              }}>
              Projects
            </span>
          </Text>
        </Box>
        <Box width={'600px'}>
          <Text
            textAlign={'center'}
            fontSize={'14px'}
            fontWeight={'regular'}
            color={'gray.500'}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here
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
          {svgArray?.map((_, index) => (
            <Box
              key={index}
              borderRadius={'12px'}
              p={'12px'}
              bgColor={hexToRGB('primary', 0.03)}
              borderWidth={2}
              _hover={{ backgroundColor: 'primary.500' }}
              borderColor={'linear-gradient(180deg, #4CA9FF 49%, #3BF686 100%)'}
              width={'300px'}>
              <VStack
                alignItems={'flex-start'}
                justifyContent={'center'}
                spacing={'10px'}>
                <Image src={_} alt={'book'} width={24} height={24} />
                <Text fontSize={'20px'}>App Development</Text>
                <Text fontSize={'12px'}>
                  It is a long established fact that a reader will be The point
                  of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using Content here,
                  content here
                </Text>
              </VStack>
            </Box>
          ))}
        </Flex>
        <Flex alignItems={'flex-end'} justifyItems={'flex-end'} mr={'40px'}>
          <Button
            bg={'linear-gradient(to right, #4CA9FF 49%, #3BF686 100%)'}
            aria-label={'add-icon'}
            color={'white'}
            onClick={() => router.push('/')}
            _hover={{
              background: 'linear-gradient(to left, #4CA9FF 49%, #3BF686 100%)',
            }}
            rightIcon={
              <ArrowRightIcon fill={'white'} width={'12px'} height={'12px'} />
            }>
            See all
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Project;
