import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { hexToRGB } from '_/theme/colors';
import { BookIcon } from '_assets/svg';
import { useTranslation } from 'react-i18next';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeInAnimation = `${fadeIn} 0.8s ease-in-out forwards`;

const Services = () => {
  const { t } = useTranslation();
  const svgArray = [
    {
      icon: <BookIcon />,
      title: 'SERVICE.FEATURES.MOBILE_APP',
      desc: 'SERVICE.FEATURES.MOBILE_APP_DESC',
    },
    {
      icon: <BookIcon />,
      title: 'SERVICE.FEATURES.BACKEND_APP',
      desc: 'SERVICE.FEATURES.BACKEND_APP_DESC',
    },
    {
      icon: <BookIcon />,
      title: 'SERVICE.FEATURES.FIGMA_APP',
      desc: 'SERVICE.FEATURES.FIGMA_APP_DESC',
    },
  ];

  return (
    <Flex
      alignItems={'flex-start'}
      p={{ base: '20px', md: '30px' }}
      width={'100%'}
      gap={{ base: '20px', md: '30px' }}
      flexDirection={'column'}>
      <VStack
        spacing={'12px'}
        alignItems={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}>
        <Box>
          <Text fontSize={{ base: '20px', md: '24px' }}>
            {t('SERVICE.TITLE1')} {''}
            <span
              style={{
                color: '#7456FF',
              }}>
              {t('SERVICE.TITLE2')}
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
            {t('SERVICE.DESC')}
          </Text>
        </Box>
      </VStack>

      {/* Features Section */}
      <Flex
        width={'100%'}
        p={{ base: '10px', md: '30px' }}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'20px'}
        flexWrap={'wrap'}>
        {svgArray?.map((item, index) => (
          <Box
            key={index}
            borderRadius={'12px'}
            p={'12px'}
            bgColor={hexToRGB('primary', 0.1)}
            width={{ base: '100%', sm: '300px', md: '350px' }}
            height={'auto'}
            animation={fadeInAnimation}
            style={{ animationDelay: `${index * 0.2}s` }}>
            <VStack
              alignItems={'flex-start'}
              justifyContent={'center'}
              width={'100%'}
              spacing={'10px'}>
              <Flex
                alignItems={'center'}
                justifyContent={'center'}
                mb={'20px'}
                gap={'20px'}>
                <div>{item?.icon}</div>
                <Text fontSize={'18px'}>{t(item?.title)}</Text>
              </Flex>
              <Text fontSize={'12px'} textAlign={'center'}>
                {t(item?.desc)}
              </Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Services;
