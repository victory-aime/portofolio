import React, { FunctionComponent } from 'react';
import { TooltipProps } from '@chakra-ui/react';
import StyledTooltip from '_theme/ToolTipStyle';

interface CustomTooltipProps extends TooltipProps {
  children: React.ReactNode;
}

const CustomTooltip: FunctionComponent<CustomTooltipProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledTooltip
      portalProps={'appendToParentPortal'}
      bg={'#06183A'}
      placement={'top'}
      hasArrow={true}
      {...props}>
      {children}
    </StyledTooltip>
  );
};

export default CustomTooltip;
