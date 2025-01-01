import { Box, Flex, Text } from '@chakra-ui/react';

const Project = () => {
  return (
    <Box p={'20px'} width={'100%'}>
      <Flex
        width={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Box>
          <Text>What I do</Text>
          <Text>
            Build and maintain websites, frontend dev also have a mentorship
            called MOFON. My motto is Beauty and function in equal measure as
            priority.
          </Text>
        </Box>

        {Array.from({ length: 2 }).map((_, index) => (
          <Flex
            key={index}
            gap={'20px'}
            bgColor={'#323443'}
            width={'300px'}
            position={'relative'}>
            <Flex
              borderRadius={'50px'}
              borderWidth={'2px'}
              position={'absolute'}
              top={'0'}
              borderColor={
                'linear-gradient(180deg, #4CA9FF 49%, #3BF686 100%)'
              }>
              <Text>45</Text>
            </Flex>
            <Box>
              <Text>Web development</Text>
              <Text>
                You will receive a customized plan for your fitness journey, and
                lots of support.
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
      <Box width={'100%'}>
        <Text>Projects</Text>
      </Box>
    </Box>
  );
};

export default Project;
