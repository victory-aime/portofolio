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
  'Deployment & Orchestration': [
    { name: 'Git/GitHub', mastery: 85 },
    { name: 'Docker', mastery: 70 },
    { name: 'RESTful APIs', mastery: 90 },
    { name: 'Responsive Design', mastery: 95 },
  ],
};

const SkillsDisplay = () => {
  return (
    <Flex
      width="100%"
      p={{ base: '10px', md: '30px' }}
      gap="20px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center">
      {Object.entries(skills).map(([category, skillSet]) => (
        <Box
          key={category}
          textAlign="left"
          w={{ base: '100%', md: '80%', lg: '60%' }}
          mb="20px">
          {/* Skill Category Title */}
          <Text
            fontSize={{ base: '18px', md: '22px' }}
            mb={4}
            fontWeight="medium"
            color="white"
            textAlign={{ base: 'center', md: 'left' }}>
            {category}
          </Text>

          {/* Skills List */}
          <VStack spacing={4} p={{ base: '20px' }}>
            {skillSet.map(skill => (
              <Box
                key={skill.name}
                w="100%"
                p={3}
                border="dashed 0.2px #3BF686"
                borderRadius="md"
                bg="rgba(0, 0, 0, 0.3)">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  flexDirection={'row'}>
                  <Text
                    fontWeight="medium"
                    mb={{ base: 2, sm: 0 }}
                    textAlign={{ base: 'center', sm: 'left' }}>
                    {skill.name}
                  </Text>
                  <Text fontWeight="medium">{skill.mastery}%</Text>
                </Flex>
                <Progress
                  value={skill.mastery}
                  size="sm"
                  colorScheme="primary"
                  borderRadius="md"
                  mt={2}
                />
              </Box>
            ))}
          </VStack>
        </Box>
      ))}
    </Flex>
  );
};

export default SkillsDisplay;
