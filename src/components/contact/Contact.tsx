'use client';
import {
  Box,
  Text,
  Center,
  HStack,
  VStack,
  Flex,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import FormTextInput from '../formInput/FormInput';
import { Formik } from 'formik';
import FormTextArea from '../form-textArea/FormTextArea';
import { hexToRGB } from '_theme/colors';
import Image from 'next/image';
import { BackgroungContactForm } from '_assets/images';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Flex
      width="100%"
      gap={{ base: '20px', md: '30px' }}
      flexDirection="column"
      p={{ base: '15px', md: '30px' }}>
      {/* Section Introduction */}
      <VStack
        spacing="12px"
        alignItems={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}>
        <Box>
          <Text fontSize={{ base: '20px', md: '24px' }}>
            {t('CONTACT.TITLE')}{' '}
            <span style={{ color: '#7456FF' }}>{t('COMMON.ME')}</span>
          </Text>
          <Box
            width="70px"
            borderColor="primary.500"
            borderBottomWidth="12px"
            borderRadius="12px"
            margin={{ base: '0 auto', md: '0' }}
          />
        </Box>
        <Box width={{ base: '100%', md: '600px' }}>
          <Text fontSize="14px" fontWeight="regular" color="gray.500">
            {t('CONTACT.DESC')}
          </Text>
        </Box>
      </VStack>

      {/* Form Section */}
      <Center width="100%" gap="50px" flexDirection="column">
        <Box
          p={{ base: '15px', md: '20px' }}
          bgColor={hexToRGB('form', 0.5)}
          width={{ base: '100%', md: '80%' }}
          borderRadius="12px">
          <Flex
            alignItems="center"
            justifyContent="center"
            width="100%"
            gap="30px"
            flexDirection={{ base: 'column', md: 'row' }}>
            {/* Form Inputs */}
            <Box width="100%" p="5px">
              <VStack spacing="8px" alignItems="flex-start">
                <Text fontSize="20px" fontWeight="bold">
                  {t('COMMON.SEND_ME')}
                </Text>
                <Text>{t('COMMON.FORM.TITLE')}</Text>
              </VStack>
              <Box width="100%" mt="20px">
                <Formik
                  initialValues={{
                    name: '',
                    firstName: '',
                    email: '',
                    subject: '',
                    message: '',
                  }}
                  onSubmit={() => {}}>
                  <VStack width="100%" spacing="20px">
                    <HStack width="100%" gap="10px" flexWrap="wrap">
                      <FormTextInput
                        name="name"
                        placeholder={t('COMMON.FORM.NAME')}
                      />
                      <FormTextInput
                        name="firstName"
                        placeholder={t('COMMON.FORM.FIRST_NAME')}
                      />
                    </HStack>
                    <FormTextInput
                      name="email"
                      placeholder={t('COMMON.FORM.EMAIL')}
                    />
                    <FormTextInput
                      name="subject"
                      placeholder={t('COMMON.FORM.SUBJECT')}
                    />
                    <FormTextArea
                      name="message"
                      placeholder={t('COMMON.FORM.MESSAGE')}
                    />
                    <Button
                      color="white"
                      bg="linear-gradient(to right, #763AF5 49%, #A604F2 100%)"
                      _hover={{
                        bg: 'linear-gradient(to left, #763AF5 49%, #A604F2 100%)',
                      }}
                      width="full">
                      {t('COMMON.SEND')}
                    </Button>
                  </VStack>
                </Formik>
              </Box>
            </Box>

            {/* Image Section */}
            <Flex
              width="100%"
              p="5px"
              alignItems="center"
              position="relative"
              justifyContent="center">
              <Image
                src={BackgroungContactForm}
                alt="contact-form"
                loading="lazy"
                width={500}
                height={500}
              />
              <Box
                position="absolute"
                bottom={0}
                maxWidth="100%"
                opacity={0.2}
                textAlign="center">
                <Text fontSize="sm" color="gray.500">
                  {t('COMMON.FORM.CITATION')}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </Flex>
  );
};

export default Contact;
