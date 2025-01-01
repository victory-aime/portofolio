import { FlagImagesKeys } from '_assets/images/flag';
import { ImageProps } from '@chakra-ui/react';

export interface FlagIconProps extends ImageProps {
  countryImage: FlagImagesKeys;
  border?: number | string;
}
