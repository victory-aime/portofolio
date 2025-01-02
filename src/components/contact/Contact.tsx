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

const Contact = () => {
  return (
    <Box width={'100%'}>
      <Center
        width={'100%'}
        p={'20px'}
        //bgColor={'red.200'}
        gap={'50px'}
        flexDirection={'column'}>
        <VStack spacing={'10px'} maxW={'500px'}>
          <Text>Get in Touch</Text>
          <Text textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius
            fugit aut omnis. Officiis explicabo, voluptatibus facere assumenda
            aliquam nihil provident perspiciatis id sapiente! Vero, sint quo.
            Doloremque, ipsum veniam.
          </Text>
        </VStack>
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
                <Text>Form</Text>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Saepe suscipit veritatis pariatur asperiores vel nemo sapiente
                  molestiae quo neque incidunt sunt dolores vitae dolore
                </Text>
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
                      <FormTextInput name={'name'} placeholder={'name'} />
                      <FormTextInput
                        name={'firstName'}
                        placeholder={'firstName'}
                      />
                    </HStack>
                    <FormTextInput name={'name'} placeholder={'name'} />
                    <FormTextInput
                      name={'firstName'}
                      placeholder={'firstName'}
                    />
                    <FormTextArea name={'message'} placeholder={'message'} />
                    <Button
                      color={'white'}
                      bg={
                        'linear-gradient(to right, #763AF5 49%, #A604F2 100%)'
                      }
                      _hover={{
                        bg: 'linear-gradient(to left, #763AF5 49%, #A604F2 100%)',
                      }}
                      width={'full'}>
                      Submit
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
                <Text>ium architecto, sit omnis nulla dolore veritatis</Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default Contact;
