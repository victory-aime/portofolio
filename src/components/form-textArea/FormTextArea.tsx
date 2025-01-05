import React, { FC } from 'react';
import { useField } from 'formik';
import { TextInputProps } from '_components/formInput/FormInput';
import { hexToRGB } from '_theme/colors';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface FormTextAreaProps extends TextInputProps {
  minHeight?: string;
}

const FormTextArea: FC<FormTextAreaProps> = ({
  required,
  label,
  value,
  onChangeFunction,
  name,
  placeholder,
  width,
  height,
  localErrorMsg,
  isReadOnly,
  isDisabled,
  validate,
}) => {
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
        <FormLabel display={'flex'} gap={'4px'}>
          {t(label)}
          {required && <Text color={'red'}> * </Text>}
        </FormLabel>
      )}
      <Textarea
        {...field}
        placeholder={t(placeholder ?? '')}
        width={width}
        height={height}
        value={value ?? field.value}
        variant={'unstyled'}
        bg={hexToRGB('white', 0.05)}
        borderWidth={1.5}
        borderColor={hexToRGB('white', 0.5)}
        pl={3}
        onChange={(event: never) => {
          if (onChangeFunction) {
            onChangeFunction(event);
          }
        }}
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
        onBlur={e => {
          field.onBlur(e);
        }}
      />
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

export default FormTextArea;
