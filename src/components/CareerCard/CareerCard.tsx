import React, { JSX } from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Overlay, Text, UnstyledButton } from '@mantine/core';
import classes from './CareerCard.module.css';

interface CareerCardProps {
  title: string;
  image: string;
  content: JSX.Element;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, image, content }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Modal 
        opened={opened} 
        onClose={close} 
        title={title} 
        size="70%" 
        fullScreen={isMobile}
      >
        {content}
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