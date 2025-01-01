import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import { hexToRGB } from '_/theme/colors';
import { BookIcon } from '_assets/svg';
import Image from 'next/image';

const Services = () => {
  const svgArray = [BookIcon, BookIcon, BookIcon, BookIcon, BookIcon, BookIcon];

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
            What{' '}
            <span
              style={{
                color: '#7456FF',
              }}>
              I do
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
      <Flex
        width={'100%'}
        p={'30px'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'20px'}
        flexWrap={'wrap'}>
        {svgArray?.map((_, index) => (
          <Box
            key={index}
            borderRadius={'12px'}
            p={'12px'}
            bgColor={hexToRGB('primary', 0.1)}
            width={'300px'}>
            <VStack
              alignItems={'flex-start'}
              justifyContent={'center'}
              spacing={'10px'}>
              <Image src={_} alt={'book'} width={24} height={24} />
              <Text fontSize={'20px'}>App Development</Text>
              <Text fontSize={'12px'}>
                It is a long established fact that a reader will be The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using Content here,
                content here
              </Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Services;
