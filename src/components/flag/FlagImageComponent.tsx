import React, { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { FlagIconProps } from './interface/flag';
import { FlagImages } from '_assets/images/flag';

const FlagImagesIconComponent: FC<FlagIconProps> = ({
  countryImage,
  border,
  ...rest
}) => {
  const flagImage = FlagImages[countryImage];

  if (!flagImage) {
    return null;
  }

  return (
    <Box alignItems={'flex-start'}>
      <Image
        id={countryImage}
        alt="flag"
        src={`/assets/images/flag/${countryImage}.png`}
        w="24px"
        h="24px"
        borderRadius={border}
        fit="cover"
        objectPosition="center"
        {...rest}
      />
    </Box>
  );
};

export default FlagImagesIconComponent;
