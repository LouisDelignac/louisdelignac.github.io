import React from 'react';
import { Title, Text, SimpleGrid, Group, Anchor, Box } from '@mantine/core';
import Dots from './components/Dots';
import { socialLinks } from './data/socialLinks';
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import CareerCard from './components/CareerCard';
import NavButton from './components/NavButton';
import './App.css';

function App() {
  const socialIcons = socialLinks.map(({ href, icon, label }) => (
    <Anchor key={label} href={href} target="_blank" rel="noreferrer" ml="xs" mr="xs">
      <i className={icon} aria-hidden="true" />
    </Anchor>
  ));
  const Cards = projects.map((proj) => (
    <ProjectCard key={proj.title} {...proj} />
  ))

  return (
    <div className="App">
      <Box component="header">
        <Title order={1} fz="3rem" ta="center" mb="md" pt="xl">
          Louis Delignac
        </Title>
        <Text fz="1.25rem" ta="center" mb="md">
          Data Science & ML Student
        </Text>
        <Group className="social-icons" justify="center">
          {socialIcons}
        </Group>
        
        <Group className="nav-list" justify="center" mt="xl" pb="lg" gap="xs">
          <NavButton href="#projects" label="Projects" />
          <NavButton href="#about-me" label="About Me" />
          <NavButton href="./CV_Louis_Delignac.pdf" label="Resume" />
        </Group>

        <Dots style={{ left: 0, top: 0 }} />
        <Dots style={{ left: 60, top: 0 }} />
        <Dots style={{ left: 0, top: 140 }} />
        <Dots style={{ right: 0, top: 60 }} />
      </Box>

      <Box component="main">
        <Box component="section" id="projects" pb="xl">
          <Title order={2} className="section-title" ta="center" pt="md" pb="md">
            My Projects
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mx={50}>
            {Cards}
          </SimpleGrid>        
        </Box>

        <Box component="section" id="about-me" pb="xl">
          <Title order={2} className="section-title" ta="center" pt="sm">
            About me
          </Title>
          <Box ml="xl" mr="xl">
            <Text>
              I am currently in the second year of a Master's in Data Science at the University of Bordeaux and am completing my final internship at STMS.
              I am passionate about data science and innovation, and I am eager to contribute to projects that have a meaningful environmental and societal impact. 
              I am particularly motivated by the opportunity to work on challenges at the intersection of artificial intelligence and industry.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 3 }}>
              <CareerCard title="Internship"          image="/images/stms2.png" />
              <CareerCard title="Academic background" image="/images/ub.png" />
              <CareerCard title="Associative"         image="/images/mayday.jpg" />
            </SimpleGrid>
          </Box>
        </Box>
      </Box>

      <Footer/>
    </div>
  );
}

export default App;
