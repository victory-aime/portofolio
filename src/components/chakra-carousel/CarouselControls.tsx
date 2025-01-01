import { TextProps, HStack, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { CAROUSEL_DIRECTION, CAROUSEL_TYPE } from './caroussel.model';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface CarouselControlsProps {
  navigate: (direction: CAROUSEL_DIRECTION) => void;
  arrowUpStyle?: TextProps;
  arrowDownStyle?: TextProps;
  type?: CAROUSEL_TYPE;
}

const CarouselControls: FC<CarouselControlsProps> = ({ navigate }) => {
  return (
    <HStack
      position="absolute"
      top="50%"
      left="10%"
      right="10%"
      transform="translateY(-50%)"
      justifyContent="space-between"
      px="20px">
      <IconButton
        aria-label="Previous slide"
        icon={<ChevronLeftIcon />}
        onClick={() => navigate(CAROUSEL_DIRECTION.LEFT)}
        bgColor={'secondary.500'}
        color={'white'}
        _hover={{
          bgColor: 'none',
        }}
        variant="outline"
        colorScheme="whiteAlpha"
        size="lg"
        isRound
      />
      <IconButton
        aria-label="Next slide"
        icon={<ChevronRightIcon />}
        onClick={() => navigate(CAROUSEL_DIRECTION.RIGHT)}
        bgColor={'secondary.500'}
        color={'white'}
        _hover={{
          bgColor: 'none',
        }}
        variant="outline"
        colorScheme="whiteAlpha"
        size="lg"
        isRound
      />
    </HStack>
  );
};

export default CarouselControls;
