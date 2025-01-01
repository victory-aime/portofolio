import { hexToRGB } from './colors';

const formContainer = {
  p: '14px',
  m: '100px',
  borderRadius: '7px',
};
const boxContainer = {
  bg: `${hexToRGB('lighter', 0.1)}`,
  p: '15px',
  borderRadius: '7px',
  minH: 'full',
};

export { formContainer, boxContainer };
