'use client';

import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import i18n from '_/locales/i18n/i18n';
import { FlagImagesKeys } from '_assets/images/flag';
import { useTranslation } from 'react-i18next';
import FlagImageComponent from '../flag/FlagImageComponent';

const Header = () => {
  const { t } = useTranslation();
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
    {
      title: 'Home',
    },
    {
      title: 'Services',
    },
    {
      title: 'MySkills',
    },
    {
      title: 'Certifications',
    },
    {
      title: 'Contact',
    },
  ];

  return (
    <Box p={'10px'} bgColor={'#0F0F0F'} w={'100%'}>
      <Flex p={'10px'} alignItems={'center'} justifyContent={'space-between'}>
        <Box w={'500px'}>
          <Box>
            <Text fontSize={'2xl'} fontWeight={'bold'}>
              {t('MY')}
              <span style={{ color: '#7456FF' }}>{t('PORTFOLIO')}</span>{' '}
            </Text>
          </Box>
        </Box>
        <Flex p={'5px'} width={'100%'}>
          {links?.map((item, index) => (
            <HStack width={'100%'} key={index} spacing={'10px'}>
              <Text
                _hover={{
                  cursor: 'pointer',
                  color: '#7456FF',
                  marginBottom: '10px',
                }}>
                {t(item?.title)}
              </Text>
            </HStack>
          ))}
          <Menu>
            <MenuButton
              width={'100%'}
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
