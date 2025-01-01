import React, {
  Children,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import { Box, BoxProps, Flex, FlexProps, TextProps } from '@chakra-ui/react';
import { useSwipeable } from 'react-swipeable';
import { debounce } from 'lodash';
import CarouselPagination from './CarouselPagination';
import CarouselSlide from './CarouselSlide';
import CarouselControls from './CarouselControls';
import { useTranslation } from 'react-i18next';
import { Icon } from '_components/Icon/Icon';
import { keyframes } from '@emotion/react';
import {
  CAROUSEL_DIRECTION,
  CAROUSEL_TYPE,
} from '_components/chakra-carousel/caroussel.model';

interface SwipeAbleHandlers {
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
  onSwipedUp?: () => void;
  onSwipedDown?: () => void;
  delta: number;
  preventDefaultTouchmoveEvent: boolean;
  trackMouse: boolean;
}

const cardAnimation = (next: boolean) => keyframes`
  0%   {top:0; transform: scale(1); z-index: 9}
  50%   {top: ${next ? '-50%' : '50%'}; transform: scale(0.9); z-index: -1; }
  100% {top:0; transform: scale(1); z-index: -1 }
`;
const DEFAULT_INTERVAL_SLIDE = 5000;

interface CarouselProps {
  type: CAROUSEL_TYPE;
  activeSlide?: (index: number) => void;
  onChange: (index: number, item: ReactNode) => void;
  withControl?: boolean;
  withPagination?: boolean;
  withPaginationArrows?: boolean;
  isInfinite?: boolean;
  height?: string;
  width?: string;
  maxWidth?: string;
  scale?: boolean;
  setSlideTo?: number;
  transition?: number;
  center?: boolean;
  itemPerSlide?: number;
  widthChild?: any;
  isWidget?: boolean;
  arrowUpStyle?: TextProps;
  arrowDownStyle?: TextProps;
  children: React.ReactNode;
}

interface CarouselState {
  currentSlide: number;
}

const initialState: CarouselState = {
  currentSlide: 0,
};

type CarouselAction =
  | { type: CAROUSEL_DIRECTION; slidesCount: number }
  | { type: 'reset' }
  | { type: 'setSlide'; slide: number };

const reducer = (state: CarouselState, action: CarouselAction) => {
  switch (action.type) {
    case CAROUSEL_DIRECTION.LEFT:
      return {
        ...state,
        currentSlide:
          state.currentSlide === 0
            ? action.slidesCount - 1
            : state.currentSlide - 1,
      };
    case CAROUSEL_DIRECTION.RIGHT:
      return {
        ...state,
        currentSlide:
          state.currentSlide === action.slidesCount - 1
            ? 0
            : state.currentSlide + 1,
      };
    case 'setSlide':
      return {
        ...state,
        currentSlide: action.slide,
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
const getSwipeActions = (
  carouselType: string,
  toNavigate: (direction: any) => void,
): Partial<SwipeAbleHandlers> => {
  return carouselType === CAROUSEL_TYPE.HORIZONTAL ||
    carouselType === CAROUSEL_TYPE.CARDSHORIZONTAL
    ? {
        onSwipedLeft: () => toNavigate(CAROUSEL_DIRECTION.RIGHT),
        onSwipedRight: () => toNavigate(CAROUSEL_DIRECTION.LEFT),
      }
    : {
        onSwipedUp: () => toNavigate(CAROUSEL_DIRECTION.RIGHT),
        onSwipedDown: () => toNavigate(CAROUSEL_DIRECTION.LEFT),
      };
};
const setTop = (index: number, currentSlide: number) => {
  if (currentSlide > index) {
    return '70%';
  }
  return currentSlide < index ? '-70%' : 0;
};
const scaleSlideVertical = (index: number, currentSlide: number): BoxProps => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .5s',
  transform: index === currentSlide ? 'scale(1)' : 'scale(0.4)',
  position: 'relative',
  top: setTop(index, currentSlide),
});
const setInsetStart = (index: number, currentSlide: number) => {
  if (currentSlide > index) {
    return '40%';
  }
  return currentSlide < index ? '-40%' : 0;
};
const scaleSlideHorizontal = (
  index: number,
  currentSlide: number,
): BoxProps => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .5s',
  transform: index === currentSlide ? 'scale(1)' : 'scale(0)',
  position: 'relative',
  insetStart: setInsetStart(index, currentSlide),
  opacity: index === currentSlide ? 1 : 0.3,
});
const setAnimation = (index: number, currentSlide: number) => {
  if (currentSlide > index) {
    return `${cardAnimation(true)} 0.5s`;
  }
  return currentSlide < index ? `${cardAnimation(false)} 0.5s` : '';
};
const scaleSlideCards = (index: number, currentSlide: number): BoxProps => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .5s',
  transform: 'scale(1)',
  zIndex: index === currentSlide ? 0 : -2,
  position: 'absolute',
  top: 0,
  animation: setAnimation(index, currentSlide),
});
const setInsetStartH = (index: number, currentSlide: number) => {
  if (currentSlide > index) {
    return '-50px';
  }
  return currentSlide < index ? '50px' : 0;
};
const scaleSlideCardsHorizontal = (
  index: number,
  currentSlide: number,
): BoxProps => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .3s',
  transform: index === currentSlide ? 'scale(1)' : 'scale(0.85)',
  position: 'absolute',
  insetStart: setInsetStartH(index, currentSlide),
  opacity: index === currentSlide ? 1 : 0.8,
  zIndex: index > currentSlide ? '-1' : '',
});

const Carousel: FC<CarouselProps> = ({
  type,
  onChange,
  withControl = true,
  withPagination = false,
  withPaginationArrows,
  isInfinite,
  height,
  maxWidth = '100%',
  width = '100%',
  scale = true,
  children,
  activeSlide,
  setSlideTo,
  transition = 100,
  itemPerSlide = 1,
  widthChild,
  isWidget,
}) => {
  const [{ currentSlide }, dispatch] = useReducer(reducer, initialState);

  const slidesCount = Math.ceil(Children.count(children) / itemPerSlide);

  useEffect(() => {
    let animatedSlide: NodeJS.Timeout;
    const startSliding = () => {
      animatedSlide = setInterval(
        () => navigate(CAROUSEL_DIRECTION.RIGHT),
        DEFAULT_INTERVAL_SLIDE,
      );
    };

    const stopSliding = () => {
      clearInterval(animatedSlide);
    };

    const safeSliding = () => {
      stopSliding();
      return startSliding();
    };

    if (isInfinite) {
      safeSliding();
    } else {
      stopSliding();
    }

    return () => {
      stopSliding();
    };
  }, [isInfinite, currentSlide]);

  useEffect(() => {
    if (setSlideTo !== undefined && setSlideTo >= 0) {
      setSlide(setSlideTo);
    }
  }, [setSlideTo]);

  useEffect(() => {
    const currentItem = Children.toArray(children)[currentSlide];
    if (activeSlide) {
      activeSlide(currentSlide);
    }

    handleChange(currentSlide, currentItem);
  }, [currentSlide]);

  const navigate = (direction: CAROUSEL_DIRECTION) => {
    dispatch({ type: direction, slidesCount });
  };

  const handleChange = useCallback(
    debounce((index: number, item: ReactNode) => {
      if (!item || index > slidesCount - 1) {
        return;
      }
      return onChange(index, item);
    }, 300),
    [slidesCount, currentSlide],
  );

  const handlers = useSwipeable({
    delta: 5, // distance in px
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    ...(getSwipeActions(type, navigate) as Partial<SwipeAbleHandlers>),
  });

  const setSlide = (slide: number) => {
    dispatch({ type: 'setSlide', slide });
  };
  const { i18n } = useTranslation();
  const transitionDirection: { [key in CAROUSEL_TYPE]: (number | string)[] } = {
    V: [0, `-${currentSlide * 100}%`, 0],
    H: [
      `${i18n.language === 'ar' ? '' : '-'}${currentSlide * transition}%`,
      0,
      0,
    ],
    C: [0, `-${0}%`, 0],
    CH: [0, 0, 0],
  };

  const lastItem = currentSlide === slidesCount - 1;
  const firstItem = currentSlide === 0;

  const carouselStyle = (): FlexProps => {
    return {
      cursor: 'pointer',
      direction:
        type === CAROUSEL_TYPE.HORIZONTAL ||
        type === CAROUSEL_TYPE.CARDSHORIZONTAL
          ? 'row'
          : 'column',

      ...(slidesCount > 1 && {
        transition: 'all .5s',
        transform: `translate3d(${transitionDirection[type].join(',')})`,
      }),

      ...(((currentSlide === 0 && !lastItem) ||
        (currentSlide === slidesCount - 1 && !firstItem)) && {
        transition: 'unset',
        transform: `translate3d(${transitionDirection[type].join(',')})`,
      }),
    };
  };
  const arrowStyles: FlexProps = {
    w: '40px',
    h: '40px',
    borderRadius: '50%',
    // bg: hexToRGB('primary', 0.04),
    cursor: 'pointer',
    alignItems: 'center',
  };

  const group = (items: any[], n: number) =>
    items.reduce((acc, x, i) => {
      const idx = Math.floor(i / n);
      acc[idx] = [...(acc[idx] || []), x];
      return acc;
    }, []);

  const checkPaddingCarousel = () => {
    if (
      withPagination &&
      type === CAROUSEL_TYPE.HORIZONTAL &&
      !withPaginationArrows
    ) {
      return '40px';
    } else if (withPagination && type === CAROUSEL_TYPE.HORIZONTAL) {
      return '70px';
    } else {
      return '';
    }
  };
  const setSlideProps = (i: number) => {
    if (scale) {
      switch (type) {
        case CAROUSEL_TYPE.VERTICAL:
          return { ...scaleSlideVertical(i, currentSlide) };
        case CAROUSEL_TYPE.CARDS:
          return { ...scaleSlideCards(i, currentSlide) };
        case CAROUSEL_TYPE.CARDSHORIZONTAL:
          return { ...scaleSlideCardsHorizontal(i, currentSlide) };
        default:
          return { ...scaleSlideHorizontal(i, currentSlide) };
      }
    }
    return {};
  };
  const flexHeight = withPagination ? `calc(${height} + 50px)` : height;
  const setStyleCardVertical = (yes: string, no: string) => {
    return type === CAROUSEL_TYPE.VERTICAL || type === CAROUSEL_TYPE.CARDS
      ? yes
      : no;
  };
  return (
    <Flex {...handlers} w="100%" alignItems="center" justifyContent="center">
      <Flex
        w="100%"
        overflow="hidden"
        pos="relative"
        pb={checkPaddingCarousel()}
        h={flexHeight}>
        <Flex w={width} maxW={maxWidth} {...carouselStyle()}>
          {group(Children.toArray(children), itemPerSlide).map(
            (childSlide: any, i: number) => (
              <CarouselSlide
                key={`slide-${i}`}
                {...setSlideProps(i)}
                visibility={currentSlide === i ? 'visible' : 'hidden'}>
                {childSlide.map((child: any, index: number) => (
                  <Flex
                    justify="center"
                    width={'100%'}
                    {...widthChild}
                    key={`child-${index}`}>
                    {child}
                  </Flex>
                ))}
              </CarouselSlide>
            ),
          )}
        </Flex>
        {withControl && <CarouselControls navigate={navigate} type={type} />}
        {withPagination && (
          <Flex
            position="absolute"
            bottom={setStyleCardVertical('50%', '0')}
            w={setStyleCardVertical('', 'full')}
            justifyContent={setStyleCardVertical('start', 'center')}>
            <Flex>
              {withPaginationArrows && (
                <Flex
                  flexGrow={1}
                  me="0"
                  opacity={currentSlide < 1 ? 0.4 : 1}
                  {...arrowStyles}
                  onClick={() => {
                    if (currentSlide > 0) {
                      navigate(CAROUSEL_DIRECTION.LEFT);
                    }
                  }}>
                  <Icon
                    displayName={`arrow-${i18n.language === 'ar' ? 'radius-right' : 'radius-left'}`}
                    w={'30px'}
                    color="secondary.500"
                    viewBox="0 0 1300 1300"
                  />
                </Flex>
              )}
              {slidesCount > 1 && (
                <Box flexGrow={1}>
                  <CarouselPagination
                    currentSlide={currentSlide}
                    slidesCount={slidesCount}
                    setSlide={setSlide}
                    isWidget={isWidget}
                  />
                </Box>
              )}

              {withPaginationArrows && (
                <Flex
                  flexGrow={1}
                  ms="10px"
                  opacity={currentSlide >= slidesCount - 1 ? 0.4 : 1}
                  {...arrowStyles}
                  onClick={() => {
                    if (currentSlide < slidesCount - 1) {
                      navigate(CAROUSEL_DIRECTION.RIGHT);
                    }
                  }}>
                  <Icon
                    overflow={'visible'}
                    displayName={`arrow-${i18n.language === 'ar' ? 'radius-left' : 'radius-right'}`}
                    w={'30px'}
                    color="secondary.500"
                    viewBox="0 0 1300 1300"
                  />
                </Flex>
              )}
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

Carousel.defaultProps = {
  withControl: true,
  withPagination: true,
  withPaginationArrows: true,
  isInfinite: false,
  type: CAROUSEL_TYPE.HORIZONTAL,
  setSlideTo: 0,
  onChange: () => {
    console.log('slide change');
  },
  isWidget: false,
};

export default Carousel;
