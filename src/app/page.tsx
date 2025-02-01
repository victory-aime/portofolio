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
import { useEffect, useRef, useState } from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { fadeIn } from '_animations/animation';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  const serviceRef: any = useRef<React.RefObject<HTMLElement> | null>(null);
  const certificationRef: any = useRef<React.RefObject<HTMLElement> | null>(
    null,
  );
  const skillsRef: any = useRef<React.RefObject<HTMLElement> | null>(null);
  const contactRef: any = useRef<React.RefObject<HTMLElement> | null>(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (ref: React.RefObject<HTMLElement> | null) => {
    console.log('handleScrollToSection', ref?.current);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Reference not defined:', ref);
    }
  };

  return (
    <ScrollAnimationProvider>
      <Box bg="linear-gradient(180deg, #0F0F0F 0%, #060021 100%)">
        <Header
          sections={{
            serviceRef,
            skillsRef,
            certificationRef,
            contactRef,
          }}
          handleScrollToSection={(ref: React.RefObject<HTMLElement> | null) =>
            handleScrollToSection(ref)
          }
        />
        <Box mt={50}>
          <Hero />
        </Box>
        <Box mt={50} ref={serviceRef as React.Ref<HTMLDivElement>}>
          <Services />
        </Box>
        <Box mt={50}>
          <Project />
        </Box>
        <Flex
          ref={skillsRef as React.Ref<HTMLDivElement>}
          mt={30}
          flexDirection="column"
          gap="30px">
          <MySkills />
          <SkillProgress />
        </Flex>
        <Box mt={50} ref={certificationRef as React.Ref<HTMLDivElement>}>
          <Certifications />
        </Box>
        <Box mt={50} ref={contactRef as React.Ref<HTMLDivElement>}>
          <Contact />
        </Box>
        <Box mt={50}>
          <Footer />
        </Box>
      </Box>
      {showScroll && (
        <IconButton
          icon={<ArrowUpIcon width={18} height={18} fill="white" />}
          position="fixed"
          bottom="45px"
          right="25px"
          zIndex="1000"
          onClick={scrollTop}
          aria-label="Scroll to top"
          bgColor="#3BF686"
          borderRadius="50px"
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
