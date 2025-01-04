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
    <Box width={'100%'}>
      <VStack spacing={'12px'} alignItems={'flex-start'} p={'30px'}>
        <Box>
          <Text fontSize={'24px'}>
            {t('CONTACT.TITLE')}{' '}
            <span
              style={{
                color: '#7456FF',
              }}>
              {t('COMMON.ME')}
            </span>
          </Text>
          <Box
            width={'70px'}
            borderColor={'primary.500'}
            borderBottomWidth={'12px'}
            borderRadius={'12px'}
          />
        </Box>
        <Box width={'600px'}>
          <Text fontSize={'14px'} fontWeight={'regular'} color={'gray.500'}>
            {t('CONTACT.DESC')}
          </Text>
        </Box>
      </VStack>
      <Center width={'100%'} p={'20px'} gap={'50px'} flexDirection={'column'}>
        <Box
          p={'20px'}
          bgColor={hexToRGB('form', 0.5)}
          width={'100%'}
          borderRadius={'12px'}>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            width={'100%'}
            gap={'30px'}>
            <Box width={'100%'} p={'5px'}>
              <VStack spacing={'8px'} alignItems={'flex-start'}>
                <Text fontSize={'20px'} fontWeight={'bold'}>
                  {t('COMMON.SEND_ME')}
                </Text>
                <Text>{t('COMMON.FORM.TITLE')}</Text>
              </VStack>
              <Box width={'100%'} mt={'20px'}>
                <Formik
                  initialValues={{
                    name: '',
                    firstName: '',
                    email: '',
                    subject: '',
                    message: '',
                  }}
                  onSubmit={() => {}}>
                  <VStack width={'100%'} spacing={'20px'}>
                    <HStack width={'100%'} gap={'10px'}>
                      <FormTextInput name={'name'} placeholder={'Nom'} />
                      <FormTextInput
                        name={'firstName'}
                        placeholder={'COMMON.FORM.FIRST_NAME'}
                      />
                    </HStack>
                    <FormTextInput
                      name={'email'}
                      placeholder={'COMMON.FORM.EMAIL'}
                    />
                    <FormTextInput
                      name={'subject'}
                      placeholder={'COMMON.FORM.SUBJECT'}
                    />
                    <FormTextArea
                      name={'message'}
                      placeholder={'COMMON.FORM.MESSAGE'}
                    />
                    <Button
                      color={'white'}
                      bg={
                        'linear-gradient(to right, #763AF5 49%, #A604F2 100%)'
                      }
                      _hover={{
                        bg: 'linear-gradient(to left, #763AF5 49%, #A604F2 100%)',
                      }}
                      width={'full'}>
                      {t('COMMON.SEND')}
                    </Button>
                  </VStack>
                </Formik>
              </Box>
            </Box>
            <Flex
              width={'100%'}
              p={'5px'}
              alignItems={'center'}
              position={'relative'}
              justifyContent={'center'}>
              <Image
                src={BackgroungContactForm}
                alt={'contact-form'}
                loading={'lazy'}
                width={500}
                height={500}
              />
              <Box
                position={'absolute'}
                bottom={0}
                maxWidth={'100%'}
                opacity={0.2}
                objectPosition={'center'}>
                <Text fontSize={'sm'} color={'gray.500'}>
                  {t('COMMON.FORM.CITATION')}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default Contact;
