'use client';
import { Box, Flex } from '@chakra-ui/react';
import Services from '_components/service/Services';
import Header from '_components/header/Header';
import Hero from '_components/hero/Hero';
import Project from '_components/project/Project';
import SkillProgress from '_components/MySkills/SkillProgress';
import MySkills from '_components/MySkills/MySkills';
import Certifications from '_components/certification/Certifications';
import Contact from '_components/contact/Contact';
import Footer from '_components/footer/Footer';

export default function Home() {
  return (
    <Box bg={'linear-gradient(180deg, #0F0F0F 0%, #060021 100%)'}>
      <Header />
      <Box mt={50}>
        <Hero />
      </Box>
      <Box mt={50}>
        <Services />
      </Box>
      <Box mt={50}>
        <Project />
      </Box>
      <Flex mt={30} flexDirection={'column'} gap={'30px'}>
        <MySkills />
        <SkillProgress />
      </Flex>
      <Box mt={50}>
        <Certifications />
      </Box>
      <Box mt={50}>
        <Contact />
      </Box>
      <Box mt={50}>
        <Footer />
      </Box>
    </Box>
  );
}
