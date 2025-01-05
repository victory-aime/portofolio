'use client';
import {
  Box,
  Text,
  Center,
  VStack,
  Flex,
  Button,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import FormTextInput from '../formInput/FormInput';
import { Formik, FormikHelpers, FormikValues } from 'formik';
import FormTextArea from '../form-textArea/FormTextArea';
import { hexToRGB } from '_theme/colors';
import Image from 'next/image';
import { BackgroungContactForm } from '_assets/images';
import { useTranslation } from 'react-i18next';
import {
  ContactFormValues,
  publicContactUsSchema,
} from './validation/validation';
import { LoadingDots } from '_animations/LoaderDots';
import axios from 'axios';

export enum ToastStatus {
  DEFAULT = 'default',
  SUCCESS = 'success',
  ERROR = 'error',
  WARN = 'warning',
  INFO = 'info',
}

const Contact = () => {
  const { t } = useTranslation();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async (
    values: FormikValues,
    { resetForm }: FormikHelpers<ContactFormValues>,
  ) => {
    const emailDto = {
      sender: {
        name: values.name + ' ' + values.firstName,
        address: values.email,
      },
      subject: values.subject,
      message: values.message,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(`api/send-email`, emailDto, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response?.data?.success) {
        toast({
          description: t('COMMON.SUCCESS'),
          title: t('COMMON.NOTIFICATION'),
          status: ToastStatus.SUCCESS,
          position: 'top',
          duration: 4000,
          isClosable: true,
        });
        setIsLoading(false);
        resetForm();
      } else {
        toast({
          description: t('COMMON.ERROR'),
          title: t('COMMON.NOTIFICATION'),
          status: ToastStatus.ERROR,
          position: 'top',
          duration: 5000,
          isClosable: true,
        });
        setIsLoading(false);
      }
    } catch (e) {
      toast({
        description: t('COMMON.NETWORK_ERROR'),
        title: t('COMMON.NOTIFICATION'),
        status: ToastStatus.ERROR,
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      console.error('Error sending email:', e);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex
      width="100%"
      gap={{ base: '20px', md: '30px' }}
      flexDirection="column"
      p={{ base: '15px', md: '30px' }}>
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
          width={'100%'}
          borderRadius="12px">
          <Flex
            alignItems="center"
            justifyContent="center"
            gap="30px"
            flexDirection={{ base: 'column', md: 'row' }}
            width="100%">
            <Box width={{ base: '100%', md: '100%' }} p="5px">
              <VStack spacing="8px" alignItems="flex-start">
                <Text fontSize="20px" fontWeight="bold">
                  {t('COMMON.SEND_ME')}
                </Text>
                <Text>{t('COMMON.FORM.TITLE')}</Text>
              </VStack>
              <Box mt="20px" width={'100%'}>
                <Formik
                  initialValues={{
                    name: '',
                    firstName: '',
                    email: '',
                    subject: '',
                    message: '',
                  }}
                  onSubmit={handleSubmitForm}
                  validationSchema={publicContactUsSchema}>
                  {({ handleSubmit, setFieldValue }) => (
                    <VStack spacing="20px" width={'100%'}>
                      <Flex width="100%" gap={'20px'}>
                        <FormTextInput
                          name="name"
                          placeholder={t('COMMON.FORM.NAME')}
                        />
                        <FormTextInput
                          name="firstName"
                          placeholder={t('COMMON.FORM.FIRST_NAME')}
                        />
                      </Flex>
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
                        height={'200px'}
                        onChangeFunction={(e: any) =>
                          setFieldValue('message', e?.target?.value)
                        }
                      />
                      <Button
                        color="white"
                        onClick={() => handleSubmit()}
                        isDisabled={isLoading}
                        bg="linear-gradient(to right, #763AF5 49%, #A604F2 100%)"
                        _hover={{
                          bg: 'linear-gradient(to left, #763AF5 49%, #A604F2 100%)',
                        }}
                        width="full">
                        {isLoading ? <LoadingDots /> : t('COMMON.SEND')}
                      </Button>
                    </VStack>
                  )}
                </Formik>
              </Box>
            </Box>
            <Flex
              width={'100%'}
              p="5px"
              alignItems="center"
              justifyContent="center"
              position="relative">
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
                w="100%"
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
