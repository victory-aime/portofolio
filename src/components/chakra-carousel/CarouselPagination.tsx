import { Box, HStack, StackProps, VStack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { hexToRGB } from '_theme/colors';
import Wrapper from './Wrapper';

interface CarouselPaginationProps {
  slidesCount: number;
  currentSlide: number;
  setSlide: (slide: number) => void;
  isWidget?: boolean;
}

const baseStyle = {
  alignSelf: 'flex-end',
  w: 'full',
  justify: 'center',
} as const;

const CarouselPagination: FC<CarouselPaginationProps> = ({
  slidesCount,
  currentSlide,
  setSlide,
}) => {
  const paginationStyle: StackProps = {
    ...baseStyle,
    flexDirection: 'row',
    spacing: 2,
  };

  return (
    <Wrapper
      condition
      wrapper={(children: ReactNode) => (
        <HStack h="40px" {...paginationStyle}>
          {children}
        </HStack>
      )}
      elseWrapper={(children: ReactNode) => (
        <VStack {...paginationStyle}>{children}</VStack>
      )}>
      {[...Array(slidesCount)].map((_, index) => (
        <Box
          key={`dot-${index}`}
          cursor="pointer"
          h="8px"
          w="8px"
          borderRadius="50%"
          bg={currentSlide === index ? 'secondary.500' : 'white'}
          transition="background-color 0.3s ease"
          _hover={{ bg: hexToRGB('purple', 0.6) }}
          onClick={() => setSlide(index)}
        />
      ))}
    </Wrapper>
  );
};

export default CarouselPagination;
