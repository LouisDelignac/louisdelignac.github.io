import React from 'react';
import { Badge, Stack, Button, Card, Group, Image, Text } from '@mantine/core';
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
  <Card shadow="sm" radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md" mb="xl">
        <Text fz="lg" fw={500}>
          {title}
          <Badge size="sm" variant="light" ml="xs">
            {categorie}
          </Badge>
        </Text>
        <Text fz="sm" mt="xs" c="dimmed">
          {description}
        </Text>
      </Card.Section>

      <Stack style={{ flexGrow: 1, justifyContent: "flex-end" }}>
        <Card.Section className={classes.section}>
          {/* <Text mt="md" className={classes.label} c="dimmed">
            Tags
          </Text> */}
          <Group gap="xs" mt={5}>
            {tags.map((tag) => (
              <Badge key={tag} variant="light" size="sm" className={classes.tag}>
                {tag}
              </Badge>
            ))}
          </Group>
        </Card.Section>

        <Group>
          <Button
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            radius="md"
            fullWidth
            style={{ flex: 1 }}
          >
            Show details
          </Button>
          {/* <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart className={classes.like} stroke={1.5} />
          </ActionIcon> */}
        </Group>
      </Stack>
    </Card>
  );

export default ProjectCard;