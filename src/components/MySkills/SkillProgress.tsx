import React from 'react';
import { Box, VStack, Text, Progress, Flex } from '@chakra-ui/react';
import { skillsData } from '_/data/data';
import { useAnimateOnScroll } from '_/app/hooks/useAnimateOnScroll';

const SkillsDisplay = () => {
  const { ref, inView } = useAnimateOnScroll('skill-list');

  return (
    <Flex
      ref={ref}
      width="100%"
      p={{ base: '10px', md: '30px' }}
      gap="20px"
      opacity={inView ? 1 : 0}
      transform={inView ? 'translateY(0)' : 'translateY(20px)'}
      transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      flexDirection="column"
      alignItems="center"
      justifyContent="center">
      {Object.entries(skillsData).map(([category, skillSet]) => (
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
