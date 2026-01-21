import { Anchor, Box, Container, Group, Paper, SimpleGrid, Title, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  CareerCard,
  CareerTimeline,
  Dots,
  Footer,
  NavButton,
  ProjectCard,
  Section,
} from './components';
import { careerData, socialLinks, projects, PAGE_TEXTS } from './data';
import './App.css';

import associativeMd from './content/career/associative.md?raw';

function App() {
  const socialIcons = socialLinks.map(({ href, icon, label }) => (
    <Anchor key={label} href={href} target="_blank" rel="noreferrer" ml="xs" mr="xs">
      <FontAwesomeIcon icon={icon} />
    </Anchor>
  ));
  const ProjectCards = projects.map((proj) => <ProjectCard key={proj.title} {...proj} />);

  return (
    <div className="App">
      <Box component="header" pb="md">
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
          <NavButton href="#about-me" label="About me" />
          <NavButton href="#projects" label="Projects" />
          <NavButton href="#associative" label="Associative" />
          <NavButton href="./CV_Louis_Delignac.pdf" label="Resume" target="_blank" />
        </Group>

        <Box visibleFrom="md">
          <Dots style={{ left: 0, top: 0 }} />
          <Dots style={{ left: 60, top: 0 }} />
          <Dots style={{ left: 0, top: 120 }} />
          <Dots style={{ right: 0, top: 60 }} />
        </Box>
      </Box>

      <Box component="main">
        <Section id="about-me" title="About me" alternate>
          <Container size="lg">
            <Paper mx="md" p="md" shadow="sm">
              <Text ta="justify">{PAGE_TEXTS.presentation}</Text>
            </Paper>
            <Title order={3} fz="1.5rem" mt="xl" mb="xl">
              Education & Experience
            </Title>
          </Container>
          <Container size="sm" ta="center" pb="md">
            <CareerTimeline items={careerData} />
          </Container>
        </Section>

        <Section id="projects" title="My Projects">
          <Container size="lg" pb="md">
            <SimpleGrid cols={{ base: 1, md: 4 }} spacing="md">
              {ProjectCards}
            </SimpleGrid>
          </Container>
        </Section>

        <Section id="associative" title="Associative" alternate>
          <Container size="xs" ta="center">
            <CareerCard
              title="My associative involvement"
              image="/images/career/mayday.webp"
              markdown={associativeMd}
            />
          </Container>
        </Section>
      </Box>

      <Footer />
    </div>
  );
}

export default App;
