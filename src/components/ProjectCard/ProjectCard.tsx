import React from 'react';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import classes from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  categorie: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, categorie, description, link, image, tags }) => (
  <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
            <Badge size="sm" variant="light">
              {categorie}
            </Badge>
          </Text>
          
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Tags
        </Text>
        <Group gap={7} mt={5}>
          {tags.map((tag) => (
            <Badge key={tag} variant="light" size="sm" className={classes.tag}>
              {tag}
            </Badge>
          ))}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          radius="md"
          style={{ flex: 1 }}
        >
          Show details
        </Button>
        {/* <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </Card>
  );


export default ProjectCard;