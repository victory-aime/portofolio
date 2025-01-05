import React from 'react';
import { useField } from 'formik';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HTMLChakraProps,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { hexToRGB } from '_/theme/colors';

export interface TextInputProps extends HTMLChakraProps<'input'> {
  name: string;
  label?: string;
  required?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  localErrorMsg?: string;
  useFullAmountMask?: boolean;
  onChangeFunction?: (value: string) => void;
  type?: string;
  accept?: string;
  validate?: any;
  customRadius?: number;
  height?: string | number;
}

const FormTextInput = ({
  name,
  label,
  type = 'text',
  placeholder,
  localErrorMsg = '',
  required,
  isReadOnly = false,
  isDisabled = false,
  accept,
  height,
  validate,
  value,
  onBlur,
  ...rest
}: TextInputProps) => {
  const { t } = useTranslation();

  const fieldHookConfig = {
    name,
    validate,
  };
  const [field, { touched, error }] = useField(fieldHookConfig);
  const isError = isReadOnly ? !!error : !!(touched && error);

  return (
    <FormControl id={name} isInvalid={isError}>
      {label && (
        <FormLabel
          display={'flex'}
          gap={'4px'}
          fontSize={{ base: '14px', md: '16px' }}>
          {t(label)}
          {required && <Text color={'red'}> * </Text>}
        </FormLabel>
      )}

      <InputGroup>
        <Input
          {...rest}
          {...field}
          type={type}
          onBlur={e => {
            field.onBlur(e);
            onBlur?.(e);
          }}
          value={value ?? field?.value}
          placeholder={t(placeholder ?? '')}
          borderRadius={'7px'}
          size={'lg'}
          variant={'unstyled'}
          bg={hexToRGB('white', 0.05)}
          borderWidth={1.5}
          borderColor={hexToRGB('white', 0.5)}
          isReadOnly={isReadOnly}
          isDisabled={isDisabled}
          pl={3}
          fontSize={{ base: '14px', md: '16px' }}
          height={height ?? '50px'}
          autoCapitalize="none"
          accept={accept}
        />
      </InputGroup>
      {isError && (
        <Flex
          gap={'5px'}
          mt={1}
          alignItems={'center'}
          justifyContent={'flex-start'}>
          <Box mt={1} color={'red.500'}>
            <InfoOutlineIcon />
          </Box>
          <FormErrorMessage>{error}</FormErrorMessage>
        </Flex>
      )}
      {localErrorMsg && (
        <FormHelperText p={1}>{t(localErrorMsg)}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormTextInput;
