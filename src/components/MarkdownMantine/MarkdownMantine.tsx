import {
  Anchor,
  Blockquote,
  Card,
  Code,
  Divider,
  Image,
  List,
  ListItem,
  Text,
  Title,
  Box,
  SimpleGrid,
  Table,
} from '@mantine/core';
import { Root, RootContent, Image as MdImage } from 'mdast';
import { unified } from 'unified';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkGfm from 'remark-gfm';

interface MarkdownMantineProps {
  markdown: string;
}

function splitMarkdownIntoSections(markdown: string): RootContent[][] {
  const tree = unified().use(remarkParse).parse(markdown) as Root;
  const sections: RootContent[][] = [];
  let currentSection: RootContent[] = [];

  for (const node of tree.children) {
    if (node.type === 'heading' && node.depth === 3) {
      if (currentSection.length > 0) sections.push(currentSection);
      currentSection = [node];
    } else {
      currentSection.push(node);
    }
  }

  if (currentSection.length > 0) sections.push(currentSection);
  return sections;
}

function groupImageBlocks(nodes: RootContent[]): (RootContent[] | MdImage[])[] {
  const blocks: (RootContent[] | MdImage[])[] = [];
  let currentImageGroup: MdImage[] = [];
  let currentContentGroup: RootContent[] = [];

  const flushContent = () => {
    if (currentContentGroup.length > 0) {
      blocks.push([...currentContentGroup]);
      currentContentGroup = [];
    }
  };

  const flushImages = () => {
    if (currentImageGroup.length > 0) {
      blocks.push([...currentImageGroup]);
      currentImageGroup = [];
    }
  };

  for (const node of nodes) {
    if (
      node.type === 'paragraph' &&
      node.children.length === 1 &&
      node.children[0].type === 'image'
    ) {
      flushContent();
      currentImageGroup.push(node.children[0] as MdImage);
    } else {
      flushImages();
      currentContentGroup.push(node);
    }
  }

  flushContent();
  flushImages();

  return blocks;
}

function renderMarkdownBlock(block: RootContent[]) {
  const markdown = unified()
    .use(remarkStringify)
    .stringify({
      type: 'root',
      children: block,
    } as Root);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => <Title order={1}>{children}</Title>,
        h2: ({ children }) => <Title order={2}>{children}</Title>,
        h3: ({ children }) => (
          <Title order={3} ta="center">
            {children}
          </Title>
        ),
        h4: ({ children }) => (
          <Title order={4} mt="md" mb="xs">
            {children}
          </Title>
        ),
        h5: ({ children }) => <Title order={5}>{children}</Title>,
        h6: ({ children }) => (
          <Text ta="center" size="sm" c="dimmed" mb="xs">
            {children}
          </Text>
        ),
        p: ({ children }) => (
          <Text size="sm" ta="justify" mb="xs" pl="xs" pr="xs">
            {children}
          </Text>
        ),
        a: ({ href, children }) => (
          <Anchor href={href} target="_blank" rel="noopener noreferrer" size="sm">
            {children}
          </Anchor>
        ),
        ul: ({ children }) => (
          <List size="sm" withPadding mb="sm">
            {children}
          </List>
        ),
        ol: ({ children }) => (
          <List size="sm" withPadding type="ordered" mb="sm">
            {children}
          </List>
        ),
        li: ({ children }) => <ListItem>{children}</ListItem>,
        blockquote: ({ children }) => (
          <Blockquote mb="sm" pt="sm" pb="1">
            {children}
          </Blockquote>
        ),
        hr: () => <Divider my="md" />,
        code: ({ children }) => <Code>{children}</Code>,
        table: ({ children }) => (
          <Table withColumnBorders mb="xs">
            {children}
          </Table>
        ),
        thead: ({ children }) => <Table.Thead bg="gray.0">{children}</Table.Thead>,
        tbody: ({ children }) => <Table.Tbody>{children}</Table.Tbody>,
        tr: ({ children }) => <Table.Tr>{children}</Table.Tr>,
        th: ({ children }) => <Table.Th>{children}</Table.Th>,
        td: ({ children }) => <Table.Td>{children}</Table.Td>,
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}

function MarkdownMantine({ markdown }: MarkdownMantineProps) {
  const sections = splitMarkdownIntoSections(markdown);

  return (
    <>
      {sections.map((section, i) => {
        const blocks = groupImageBlocks(section);

        return (
          <Card key={i} withBorder shadow="xs" p="md" mb="md">
            {blocks.map((block, j) => {
              if (Array.isArray(block) && block[0]?.type === 'image') {
                const images = block as MdImage[];
                return (
                  <SimpleGrid
                    key={j}
                    cols={{ base: 1, md: images.length >= 3 ? 3 : images.length }}
                    mb="xs"
                  >
                    {images.map((img, idx) => (
                      <Box key={idx}>
                        <Image
                          src={img.url}
                          alt={img.alt || ''}
                          title={img.title || undefined}
                          fit="contain"
                          style={{
                            maxHeight: `${images.length === 1 ? 400 : images.length === 2 ? 300 : 200}px`,
                          }}
                        />
                        {img.title && (
                          <Text size="xs" ta="center" c="dimmed">
                            {img.title}
                          </Text>
                        )}
                      </Box>
                    ))}
                  </SimpleGrid>
                );
              } else {
                return <div key={j}>{renderMarkdownBlock(block as RootContent[])}</div>;
              }
            })}
          </Card>
        );
      })}
    </>
  );
}

export default MarkdownMantine;
