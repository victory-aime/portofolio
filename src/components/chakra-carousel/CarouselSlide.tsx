import { FC, memo } from 'react';
import { BoxProps, Flex } from '@chakra-ui/react';

interface ICarousel extends BoxProps {
  slideOrder?: number;
}

const CarouselSlide: FC<ICarousel> = ({ children, ...slideStyle }) => {
  return (
    <Flex
      px={{ base: '0', sm: '14px' }}
      boxSize="full"
      flex="1 0 100%"
      justifyContent={'center'}
      {...slideStyle}>
      {children}
    </Flex>
  );
};

export default memo(CarouselSlide);
