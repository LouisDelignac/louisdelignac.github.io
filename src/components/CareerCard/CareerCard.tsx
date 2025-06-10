import React from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Card, Image, Modal, Overlay, Text, Title, SimpleGrid, UnstyledButton } from '@mantine/core';
import classes from './CareerCard.module.css';
import career from '../../data/career.json';
// import { career } from '../../data'

interface CareerCardProps {
  title: string;
  image: string;
}

interface Illustration {
  link: string;
  label: string;
}

interface Career {
  title: string;
  date?: string;
  description: string[];
  images?: Illustration[];
  projects?: Career[];
}

const CareerCard: React.FC<CareerCardProps> = ({ title, image }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const content: Career[] = career.carrers.find((item) => item.name === title)?.content || [];
  const titleContent = content.map((item, index) => (
    <Card key={index} withBorder shadow="xs" p="md" mb="md">
      <Title order={3} ta="center">{item.title}</Title>
      {item.date && <Text ta="center" size="sm" c="dimmed" mb="xs">{item.date}</Text>}
      {item.description.map((text, idx) => (
        <Text key={idx} size="sm" ta="justify" mb="xs">{text}</Text>
      ))}
      {item.images && item.images.length > 0 && (
        <SimpleGrid cols={{ base: 1, md: 3 }}>
          {item.images.map((illustration, idx) => (
            <Image
              key={idx}
              src={illustration.link}
              alt={illustration.label}
            />
          ))}
        </SimpleGrid>
      )}
      {item.projects && item.projects.length > 0 && (
        <div>
          {item.projects.map((project, idx) => (
            <>
              <Title order={4} key={idx} mt="md">{project.title}</Title>
              {project.description.map((text, idx) => (
                <Text key={idx} size="sm" ta="justify" mb="xs">{text}</Text>
              ))}
            </>
          ))}
        </div>
      )}
    </Card>
  ));

  return (
    <>
      <Modal 
        opened={opened} 
        onClose={close} 
        title={title} 
        size="70%" 
        fullScreen={isMobile}
      >
        {titleContent}
      </Modal>

      <UnstyledButton
        onClick={open}
        style={{ backgroundImage: `url(${image})` }}
        className={classes.categoryCard}
        key={title}
      >
        <Overlay color="#000" opacity={0.6} zIndex={1} />
        <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
          {title}
        </Text>
      </UnstyledButton>
    </>
  );
};

export default CareerCard;