import { styled, Tooltip } from '@chakra-ui/react';

const StyledTooltip = styled(Tooltip, {
  baseStyle: {
    minW: 'max-content',
    minHeight: '48px',
    borderRadius: '7px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '13px',
    fontWeight: '400',
    lineHeight: '13.04px',
    padding: '10px',
  },
  _after: {
    backgroundColor: '#06183A',
  },
});
export default StyledTooltip;
