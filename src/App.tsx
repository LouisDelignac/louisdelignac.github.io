import { Anchor, Box, Container, Group, SimpleGrid, Title, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Dots, ProjectCard, CareerCard, NavButton, Footer } from './components';
import { socialLinks, projects, PAGE_TEXTS } from './data';
import './App.css';

import internshipsMd from './content/career/internships.md?raw';
import academicBackgroundMd from './content/career/academic_background.md?raw';
import associativeMd from './content/career/associative.md?raw';

function App() {
  const socialIcons = socialLinks.map(({ href, icon, label }) => (
    <Anchor key={label} href={href} target="_blank" rel="noreferrer" ml="xs" mr="xs">
      <FontAwesomeIcon icon={icon} />
    </Anchor>
  ));
  const ProjectCards = projects.map((proj) => (
    <ProjectCard key={proj.title} {...proj} />
  ))

  return (
    <div className="App">
      <Box component="header">
        <Title order={1} fz="3rem" ta="center" mb="md" pt="xl">
          Louis Delignac
        </Title>
        <Text fz="1.25rem" ta="center" mb="md">
          Data Scientist & ML/DL Engineer
        </Text>
        <Group className="social-icons" justify="center">
          {socialIcons}
        </Group>
        
        <Group className="nav-list" justify="center" mt="xl" pb="lg" gap="xl">
          <NavButton href="#projects"               label="Projects" />
          <NavButton href="#about-me"               label="About Me" />
          <NavButton href="./CV_Louis_Delignac.pdf" label="Resume"   target="_blank"/>
        </Group>
        
        <Box visibleFrom='md'>
          <Dots style={{ left: 0,  top: 0   }} />
          <Dots style={{ left: 60, top: 0   }} />
          <Dots style={{ left: 0,  top: 120 }} />
          <Dots style={{ right: 0, top: 60  }} />
        </Box>
      </Box>

      <Box component="main">
        <Box component="section" id="projects" pb="xl" bg="gray.0">
          <Title order={2} fz="2rem" ta="center" pt="xl" pb="md" m="md">
            My Projects
          </Title>
          <Container size="lg">
            <SimpleGrid cols={{ base: 1, md: 4 }} spacing="md" pb="md">
              {ProjectCards}
            </SimpleGrid>        
          </Container>
        </Box>

        <Box component="section" id="about-me" pb="xl">
          <Title order={2} fz="2rem" ta="center" pt="xl" mb="md">
            About me
          </Title>
          <Container size="lg">
            <Text ta="justify" mb="xl">
              {PAGE_TEXTS.presentation}
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" pb="xl">
              <CareerCard title="Professional experiences"         image="/images/career/stms2.png"   markdown={internshipsMd}        />
              <CareerCard title="Academic background" image="/images/career/ub.png"      markdown={academicBackgroundMd} />
              <CareerCard title="Associative"         image="/images/career/mayday.webp" markdown={associativeMd}        />
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
      
      <Footer/>
    </div>
  );
}

export default App;
