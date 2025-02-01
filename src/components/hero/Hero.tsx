import { Box, Button, Flex, Text, VStack, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { hexToRGB } from '_theme/colors';
import { DownloadIcon } from '@chakra-ui/icons';
import { textTypings, zoomIn } from '_animations/animation';
import { socialDataLinks } from '_/data/data';
import { useAnimateOnScroll } from '_app/hooks/useAnimateOnScroll';
import CustomTooltip from '../CustomTooltip/CustomTooltip';

const Hero = () => {
  const { t } = useTranslation();
  const textTypingsAnimation = `${textTypings} 5s steps(20) infinite`;
  const zoomInImage = `${zoomIn} 1.2s ease-in-out`;
  const { ref, inView } = useAnimateOnScroll('hero');

  return (
    <Flex
      ref={ref}
      width={'100%'}
      p={'10px'}
      gap={'20px'}
      opacity={inView ? 1 : 0}
      transform={inView ? 'translateY(0)' : 'translateY(20px)'}
      transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      justifyContent={'space-between'}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}>
      <Box
        pl={{ base: '0', md: '20px' }}
        width={{ base: '100%', md: '50%' }}
        textAlign={{ base: 'center', md: 'left' }}>
        <VStack
          spacing={'15px'}
          p={{ base: '20px' }}
          alignItems={{ base: 'center', md: 'flex-start' }}>
          <Text fontSize={'2xl'} fontWeight={'semibold'}>
            {t('HELLO')}
          </Text>
          <Box>
            <Text fontSize={'2xl'} fontWeight={'semibold'}>
              {t('WHO_AM_I')} {''}
              <span style={{ color: '#7456FF' }}>{t('USER_NAME')}</span>
            </Text>
            <Text
              as="span"
              color="primary.500"
              fontWeight={'bold'}
              fontSize={{ base: '20px', md: '24px' }}
              whiteSpace="nowrap"
              overflow={'visible'}
              display="inline-block"
              position="relative"
              width="fit-content"
              animation={textTypingsAnimation}
              css={{
                '&::before': {
                  content: '"|"',
                  position: 'absolute',
                  right: '-10px',
                  color: 'white',
                  animation: `blinkCursor`,
                },
              }}>
              {t('JOB_TITLE')}
            </Text>
          </Box>
          <Text
            fontSize={'16px'}
            fontWeight={'regular'}
            color={'gray.500'}
            textAlign={{ base: 'center', md: 'justify' }}>
            {t('PORTFOLIO_DESCRIPTION')}
          </Text>
          <Button
            as="a"
            href="/assets/cv.pdf"
            download
            mt={{ base: 4, md: 2 }}
            color={'white'}
            _hover={{
              background: 'linear-gradient(to left, #4CA9FF 49%, #3BF686 100%)',
            }}
            rightIcon={<DownloadIcon />}
            _active={{ background: '#000000' }}
            bg={'linear-gradient(to right, #4CA9FF 49%, #3BF686 100%)'}>
            {t('DOWNLOAD_CV')}
          </Button>
        </VStack>
      </Box>
      <Flex
        width={{ base: '100%', md: '50%' }}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        animation={zoomInImage}
        textAlign={'center'}>
        <Image
          src={'/assets/images/picture.png'}
          alt={'hero'}
          width={350}
          height={100}
          style={{ borderRadius: '50%' }}
        />
        <Flex
          width={'100%'}
          pr={{ base: '0', md: '50px' }}
          mt={{ base: '20px', md: '0' }}
          alignItems={'center'}
          gap={'20px'}
          justifyContent={'center'}>
          <Text>{t('FIND_ME_ON')}</Text>
          {socialDataLinks.map((item, index) => (
            <CustomTooltip key={index} label={item?.label}>
              <Link href={item?.link} isExternal>
                <Flex
                  gap={'20px'}
                  borderRadius={'50px'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  width={'45px'}
                  height={'45px'}
                  bgColor={hexToRGB('primary', 0.2)}
                  _hover={{ bgColor: hexToRGB('primary', 0.4) }}>
                  <div>{item?.icon}</div>
                </Flex>
              </Link>
            </CustomTooltip>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
