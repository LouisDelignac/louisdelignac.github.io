import React from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Badge, Button, Card, Group, Image, Modal, Stack, Text } from '@mantine/core';
import { MarkdownMantine } from '../MarkdownMantine';
import { MarkdownViewer } from '../../utils';

interface ProjectCardProps {
  title: string;
  categorie: string;
  description: string;
  image: string;
  tags: string[];
  markdown: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, categorie, description, image, tags, markdown }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
  <>
    <Modal opened={opened} onClose={close} title={title} size="70%" fullScreen={isMobile}>
      <MarkdownMantine markdown={MarkdownViewer(markdown)} />
    </Modal>

    <Card withBorder shadow="sm" radius="md" p="md">
        <Card.Section>
          <Image src={image} alt={title} height={180} fit="contain" />
        </Card.Section>

        <Card.Section mt="md" mb="xl" pl="md" pr="md">
          <Text fz="lg" fw={500}>
            {title}
            <Badge size="sm" variant="light" ml="xs">
              {categorie}
            </Badge>
          </Text>
          <Text ta="justify" fz="sm" mt="xs" c="dimmed">
            {description}
          </Text>
        </Card.Section>

        <Stack style={{ flexGrow: 1, justifyContent: "flex-end" }}>
          <Card.Section pl="md" pr="md">
            <Group gap="xs" mt={5}>
              {tags.map((tag) => (
                <Badge key={tag} variant="light" size="sm">
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