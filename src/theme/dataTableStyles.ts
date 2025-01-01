import { Table, Td, Th, Tr } from '@chakra-ui/react';
import { styled } from '@chakra-ui/react';
import { hexToRGB } from '_theme/colors';

const StyledTable = styled(Table, {
  baseStyle: {
    borderCollapse: 'separate',
    borderSpacing: '0 10px',
    '&.chakra-table > tbody > tr > td:first-of-type': {
      position: 'relative',
    },
    '.th-select, .customTable': {
      '.chakra-checkbox ': {
        position: 'unset',
      },
    },
    '.chakra-table > tbody > tr:first-of-type, td:first-of-type,.chakra-table > thead > tr:first-of-type, th:first-of-type':
      {
        borderTopLeftRadius: '7px',
        borderBottomLeftRadius: '7px',
      },
    '.chakra-table > tbody > tr:last-of-type, td:last-of-type,.chakra-table > thead > tr:last-of-type, th:last-of-type':
      {
        borderTopRightRadius: '7px',
        borderBottomRightRadius: '7px',
      },
    '.chakra-table > thead > tr, th': {
      backgroundColor: 'primary.500',
      textColor: 'white',
    },
    '.chakra-table > thead , .first-tr': {
      boxShadow: 'inset 5px 20px 20px 0px #6E7C7C1A',
    },
    '.chakra-table > tbody': {
      marginBottom: '10px',
    },
    'tbody:before': {
      content: "'@'",
      display: 'block',
      lineHeight: '10px',
      textIndent: '-99999px',
    },
    '.chakra-stack > button': {
      color: '#fff',
    },
  },
});

const StyledTh = styled(Th, {
  baseStyle: {
    color: 'black',
    fontSize: '15px',
    textTransform: 'capitalize',
    letterSpacing: 'inherit',
    borderColor: 'rgba(199, 199, 210, 0.15)',
    background: 'white',
    height: '62px',
    minWidth: '100px',
    maxWidth: '140px',
    lineHeight: '1.5rem',
  },
});

const StyledTd = styled(Td, {
  baseStyle: {
    color: 'overlay.500',
    backgroundColor: hexToRGB('lighter', 0.1),
    fontSize: '14px',
    letterSpacing: 'inherit',
    border: 'none',
    maxW: '120px',
    maxH: '62px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    lineClamp: '2',
  },
});

const scrollbarStyle = {
  '::-webkit-scrollbar': {
    width: '5px',
    height: '5px',
  },
  '::-webkit-scrollbar-thumb': {
    background: '#1A3C8A',
    backgroundClip: 'padding-box',
    borderRadius: '9999px',
  },
};
const StyledTr = styled(Tr, {
  baseStyle: {
    // ':nth-of-type(odd)': {
    //   background: 'red.500',
    // },
    backgroundColor: hexToRGB('lighter', 0.1),
    height: '62px',
  },
});
const DataTableStyles = {
  Table: {
    variants: {
      primary: ({ colorScheme = 'blue' }) => ({
        color: `${colorScheme}.50`,
      }),
    },
    defaultProps: {
      colorScheme: 'green',
    },
  },
};

export {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTr,
  DataTableStyles,
  scrollbarStyle,
};
