import { Box, Flex } from '@chakra-ui/react';
import { dots } from './animation';

export const LoadingDots = () => {
  const animation = `${dots} 1.4s infinite`;
  return (
    <Flex alignItems={'center'} justifyContent={'center'} gap={'5px'}>
      {[...Array(3)].map((_, i) => (
        <Box
          key={i}
          animation={animation}
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: 'white',
            borderRadius: '50%',
            animation: `${dots} 1.4s infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </Flex>
  );
};
