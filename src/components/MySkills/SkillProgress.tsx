import React from 'react';
import { Box, VStack, Text, Progress, Flex } from '@chakra-ui/react';

const skills = {
  FrontEnd: [
    { name: 'ReactJS', mastery: 90 },
    { name: 'React Native', mastery: 90 },
    { name: 'NextJS', mastery: 90 },
    { name: 'HTML5', mastery: 95 },
    { name: 'CSS3', mastery: 90 },
    { name: 'TailwindCSS', mastery: 80 },
  ],
  BackEnd: [
    { name: 'Node.js', mastery: 95 },
    { name: 'Express', mastery: 80 },
    { name: 'NestJS', mastery: 90 },
    { name: 'PostgreSQL', mastery: 100 },
  ],
  Deployment: [
    { name: 'Git/GitHub', mastery: 85 },
    { name: 'RESTful APIs', mastery: 90 },
    { name: 'Responsive Design', mastery: 95 },
  ],
};

const SkillsDisplay = () => {
  return (
    <Flex width={'100%'}>
      {Object.entries(skills).map(([category, skillSet]) => (
        <Flex
          key={category}
          width={'100%'}
          p={'15px'}
          alignItems={'flex-start'}
          justifyContent={'center'}
          gap={'20px'}
          flexWrap={'wrap'}>
          <Box textAlign="left" w="full">
            <Text
              fontSize={'22px'}
              mb={4}
              fontWeight={'medium'}
              color={'white'}>
              {category}
            </Text>
            <VStack spacing={4}>
              {skillSet.map(skill => (
                <Box
                  key={skill.name}
                  w="full"
                  p={3}
                  border={'dashed 0.2px #3BF686 '}
                  borderRadius="md"
                  _hover={{ bg: 'none' }}>
                  <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Text fontWeight="medium" mb={2}>
                      {skill.name}
                    </Text>
                    <Text fontWeight="medium" mb={2}>
                      {skill.mastery}%
                    </Text>
                  </Flex>

                  <Progress
                    value={skill.mastery}
                    size="sm"
                    colorScheme="primary"
                    borderRadius="md"
                  />
                </Box>
              ))}
            </VStack>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default SkillsDisplay;
