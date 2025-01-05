'use client';

import {
  Box,
  Button,
  Flex,
  HStack,
  VStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import i18n from '_/locales/i18n/i18n';
import { FlagImagesKeys } from '_assets/images/flag';
import { useTranslation } from 'react-i18next';
import FlagImageComponent from '../flag/FlagImageComponent';
import { hexToRGB } from '_theme/colors';
import { keyframes } from '@emotion/react';
import { FC } from 'react';

type HeaderProps = {
  sections: {
    serviceRef: React.RefObject<HTMLElement> | null;
    skillsRef: React.RefObject<HTMLElement> | null;
    certificationRef: React.RefObject<HTMLElement> | null;
    contactRef: React.RefObject<HTMLElement> | null;
  };
  handleScrollToSection: (ref: React.RefObject<HTMLElement> | null) => void;
};

const Header: FC<HeaderProps> = ({ sections, handleScrollToSection }) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const responsiveMode = useBreakpointValue({ md: 'web', base: 'mobile' });

  const switchLanguage = (code: string) => {
    i18n
      .changeLanguage(code)
      .then(() => {})
      .catch(error => {
        console.error(error);
      });
  };

  const LANGUAGES_OPTIONS = [
    {
      code: 'en',
      label: 'English',
    },
    {
      code: 'fr',
      label: 'Français',
    },
  ];

  const links = [
    { title: 'HEADER.HOME', ref: sections.serviceRef },
    { title: 'HEADER.SERVICE', ref: sections.serviceRef },
    { title: 'HEADER.SKILLS', ref: sections.skillsRef },
    { title: 'HEADER.CERTIFICATION', ref: sections.certificationRef },
    { title: 'HEADER.CONTACT', ref: sections.contactRef },
  ];

  const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

  return (
    <Box p={'10px'} bgColor={'#0F0F0F'} w={'100%'}>
      <Flex
        p={'10px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}>
        <Box>
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            {t('MON')}
            <span style={{ color: '#7456FF' }}>{t('PORTFOLIO')}</span>{' '}
          </Text>
        </Box>
        <HStack
          display={{ base: 'none', md: 'flex' }}
          spacing={'20px'}
          alignItems={'center'}>
          {links.map((item, index) => (
            <Text
              key={index}
              onClick={() => {
                handleScrollToSection(item?.ref);
                onClose();
              }}
              _hover={{
                cursor: 'pointer',
                color: '#7456FF',
                marginBottom: '10px',
              }}>
              {t(item?.title)}
            </Text>
          ))}
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={
                <FlagImageComponent
                  border={50}
                  countryImage={
                    i18n?.language.toUpperCase()?.toString() as FlagImagesKeys
                  }
                />
              }>
              <Text color={'white'}>
                {i18n.language === 'en' ? 'English' : 'Français'}
              </Text>
            </MenuButton>
            <MenuList
              borderWidth={3}
              borderColor={
                'linear-gradient(to right, #4CA9FF 49%, #3BF686 100%)'
              }>
              {LANGUAGES_OPTIONS?.map(language => (
                <MenuItem
                  key={language.code}
                  color={'black'}
                  onClick={() => switchLanguage(language.code)}>
                  {language.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
        <Box
          display={{ base: 'block', md: 'none' }}
          animation={`${fadeIn}  0.8s ease-out`}>
          <IconButton
            icon={<HamburgerIcon />}
            color="primary.500"
            variant="ghost"
            aria-label="Open Menu"
            _hover={{ color: '#7456FF' }}
            onClick={onOpen}
          />
        </Box>
        {responsiveMode === 'mobile' && (
          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader />
              <DrawerBody mt={8} bgColor={hexToRGB('form', 0.9)}>
                <VStack
                  spacing={'10px'}
                  alignItems={'flex-end'}
                  display={{ base: 'flex', md: 'none' }}
                  p={'10px'}>
                  {links.map((item, index) => (
                    <Text
                      key={index}
                      onClick={() => {
                        if (item?.ref?.current) {
                          handleScrollToSection(item.ref);
                          onClose();
                        }
                      }}
                      _hover={{
                        cursor: 'pointer',
                        color: '#7456FF',
                      }}>
                      {t(item?.title)}
                    </Text>
                  ))}
                  <Menu>
                    <MenuButton
                      as={Button}
                      leftIcon={
                        <FlagImageComponent
                          border={50}
                          countryImage={
                            i18n?.language
                              .toUpperCase()
                              ?.toString() as FlagImagesKeys
                          }
                        />
                      }>
                      <Text color={'white'}>
                        {i18n.language === 'en' ? 'English' : 'Français'}
                      </Text>
                    </MenuButton>
                    <MenuList
                      borderWidth={3}
                      borderColor={
                        'linear-gradient(to right, #4CA9FF 49%, #3BF686 100%)'
                      }>
                      {LANGUAGES_OPTIONS.map(language => (
                        <MenuItem
                          key={language.code}
                          color={'black'}
                          onClick={() => switchLanguage(language.code)}>
                          {language.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
