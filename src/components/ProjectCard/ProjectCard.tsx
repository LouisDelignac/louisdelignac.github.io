import React from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Badge, Button, Card, Center, Group, Image, Modal, Stack, Text } from '@mantine/core';
import { MarkdownMantine } from '../MarkdownMantine';

interface CardImageProps {
  path: string;
  logo: boolean;
}

interface ProjectCardProps {
  title: string;
  categorie: string;
  description: string;
  image: CardImageProps;
  tags: string[];
  markdown: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, categorie, description, image, tags, markdown }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
  <>
    <Modal opened={opened} onClose={close} title={title} size="70%" fullScreen={isMobile}>
      <MarkdownMantine markdown={markdown} />
    </Modal>

    <Card withBorder shadow="sm" radius="md" p="md">
      <Card.Section>
        <Center>
          <Image
            src={image.path}
            alt={title}
            height={140}
            fit={image.logo ? 'contain' : 'cover'}
            mx={image.logo ? 'md' : 0}
            style={{ borderBottom: '1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))'}}
          />
        </Center>
        </Card.Section> 

        <Card.Section mt="md" mb="xl" px="md">
          <Text fz="lg">
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {categorie}
          </Badge>
          <Text ta="justify" fz="sm" mt="xs" c="dimmed">
            {description}
          </Text>
        </Card.Section>

        <Stack style={{ flexGrow: 1, justifyContent: "flex-end" }}>
          <Card.Section px="md">
            <Group gap="xs" mt={5}>
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </Group>
          </Card.Section>

          <Group>
            <Button
              onClick={open}
              radius="md"
              fullWidth
              style={{ flex: 1 }}
            >
              Show details
            </Button>
          </Group>
        </Stack>
      </Card>
    </>
  );
};

export default ProjectCard;