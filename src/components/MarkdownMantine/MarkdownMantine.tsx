import { JSX, useEffect, useState } from 'react';
import { Text, Title, Image, List, ListItem, Card, Blockquote, Divider, TitleOrder, Box, SimpleGrid } from '@mantine/core';
import { marked } from 'marked';
import DOMPurify from "dompurify";

interface MarkdownMantineProps {
  markdown: string;
}

interface Token {
  type: string;
  text?: string;
  depth?: TitleOrder;
  href?: string;
  title?: string;
  tokens?: Token[];
  items?: { text: string }[];
  raw?: string;
}

function groupSections(tokens: Token[]) {
  const sections: Token[][] = [];
  let currentSection: Token[] = [];

  for (const token of tokens) {
    if (token.type === 'heading' && token.depth === 3) {
      if (currentSection.length > 0) sections.push(currentSection);
      currentSection = [token];
    } else {
      currentSection.push(token);
    }
  }
  if (currentSection.length > 0) sections.push(currentSection);

  return sections;
}

async function renderParagraphs(text: string, key: number) {
  const rawParagraphs = text.split('\n');
  const parsedParagraphs = await Promise.all(rawParagraphs.map((p) => marked.parseInline(p)));

  const groupedElements: { type: 'image' | 'text'; items: any[] }[] = [];
  let currentGroup: { type: 'image' | 'text'; items: any[] } | null = null;

  parsedParagraphs.forEach((paragraph, i) => {
    const isImage = paragraph.trim().startsWith('<img');
    
    if (isImage) {
      const srcMatch = paragraph.match(/src="([^"]+)"/);
      const src = srcMatch ? srcMatch[1] : '';
      const altMatch = paragraph.match(/alt="([^"]+)"/);
      const alt = altMatch ? altMatch[1] : '';
      const titleMatch = paragraph.match(/title="([^"]+)"/);
      const title = titleMatch ? titleMatch[1] : '';
      
      const imageElement = { src, alt, title, key: i };
      
      if (currentGroup?.type === 'image') {
        currentGroup.items.push(imageElement);
      } else {
        if (currentGroup) groupedElements.push(currentGroup);
        currentGroup = { type: 'image', items: [imageElement] };
      }
    } else {
      const textElement = { content: paragraph, key: i };
      
      if (currentGroup?.type === 'text') {
        currentGroup.items.push(textElement);
      } else {
        if (currentGroup) groupedElements.push(currentGroup);
        currentGroup = { type: 'text', items: [textElement] };
      }
    }
  });
  
  if (currentGroup) groupedElements.push(currentGroup);

  return (
    <Box key={key}>
      {groupedElements.map((group, groupIndex) => {
        if (group.type === 'image') {
          return (
            <SimpleGrid cols={{ base: 1, md: 3 }} key={groupIndex} mb="xs">
              {group.items.map((img) => (
                <Image fit="contain" src={img.src} alt={img.alt} title={img.title} />
              ))}
            </SimpleGrid>
          );
        } else {
          return (
            <div key={groupIndex}>
              {group.items.map((text) => (
                <Text key={text.key} size="sm" ta="justify" mb="xs">
                  <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text.content) }} />
                </Text>
              ))}
            </div>
          );
        }
      })}
    </Box>
  );
}

const ParagraphsRenderer = ({ text, keyId }: { text: string; keyId: number }) => {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    renderParagraphs(text, keyId).then(setContent);
  }, [text, keyId]);

  return content;
};

function renderToken(token: Token, key: number) {
  switch (token.type) {
    case 'heading':
      const ta = token.depth === 3 ? 'center' : 'left';
      if (token.depth === 6) {
        return (
          <Text ta="center" size="sm" c="dimmed" mb="xs">
            {token.text}
          </Text>
        )
      }
      return (
        <Title key={key} order={token.depth} ta={ta}>
          {token.text}
        </Title>
      );
    case 'paragraph':
      return (
        <ParagraphsRenderer text={token.text || ''} keyId={key} />
      );
    case 'list':
      return (
        <List key={key} size="sm" mb="sm" withPadding>
          {token.items?.map((item, i) => (
            <ListItem key={i}>{item.text}</ListItem>
          ))}
        </List>
      );
    case 'blockquote':
      return (
        <Blockquote key={key} mb="sm">
          {token.text}
        </Blockquote>
      );
    case 'hr':
      return <Divider key={key} my="md" />;
    default:
      return null;
  }
}

function MarkdownMantine({ markdown }: MarkdownMantineProps) {
  const tokens = marked.lexer(markdown) as Token[];
  const sections = groupSections(tokens);

  return (
    <div>
      {sections.map((section, i) => (
        <Card key={i} withBorder shadow="xs" p="md" mb="md">
          {section.map((token, j) => renderToken(token, j))}
        </Card>
      ))}
    </div>
  );
}

export default MarkdownMantine;