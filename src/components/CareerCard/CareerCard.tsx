import React, { JSX } from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Overlay, Text, UnstyledButton } from '@mantine/core';
import { MarkdownMantine } from '../MarkdownMantine';

interface CareerCardProps {
  title: string;
  image: string;
  markdown: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, image, markdown }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const styleButton = {
    height: '160px',
    position: 'relative' as const,
    backgroundImage: `url(${image})`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    borderRadius: 'var(--mantine-radius-lg)',
    overflow: 'hidden'
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title={title} size="70%" fullScreen={isMobile}>
        <MarkdownMantine markdown={markdown} />
      </Modal>

      <UnstyledButton 
        onClick={open}
        style={styleButton}
      >
        <Overlay color="#000" opacity={0.6} zIndex={1} />
        <Text style={{ position: 'relative', zIndex: 2 }} size="xl" ta="center" fw={700} c="white">
          {title}
        </Text>
      </UnstyledButton>
    </>
  );
};

export default CareerCard;