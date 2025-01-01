import { Box } from '@chakra-ui/react';
import Header from '_components/header/Header';
import Hero from '_components/hero/Hero';
import Project from '_components/project/Project';

export default function Home() {
  return (
    <Box bg="linear-gradient(180deg, #0F0F0F 0%, #060021 100%)">
      <Header />
      <Box mt={50}>
        <Hero />
      </Box>
      <Box mt={50}>
        <Project />
      </Box>
    </Box>
  );
}
