'use client';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import Services from '_components/service/Services';
import Header from '_components/header/Header';
import Hero from '_components/hero/Hero';
import Project from '_components/project/Project';
import SkillProgress from '_components/MySkills/SkillProgress';
import MySkills from '_components/MySkills/MySkills';
import Certifications from '_components/certification/Certifications';
import Contact from '_components/contact/Contact';
import Footer from '_components/footer/Footer';
import { ScrollAnimationProvider } from './hooks/scrollAnimationContect';
import { useEffect, useState } from 'react';
import { keyframes } from '@emotion/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <ScrollAnimationProvider>
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
      {showScroll && (
        <IconButton
          icon={<ArrowUpIcon width={18} height={18} fill={'white'} />}
          position="fixed"
          bottom="45px"
          right="25px"
          zIndex="1000"
          onClick={scrollTop}
          aria-label="Scroll to top"
          bgColor={'#3BF686'}
          borderRadius={'50px'}
          animation={`${fadeIn} 0.5s ease-in-out`}
          display={showScroll ? 'block' : 'none'}
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.2s ease-in-out',
            filter: 'brightness(1.2)',
          }}
        />
      )}
    </ScrollAnimationProvider>
  );
}
