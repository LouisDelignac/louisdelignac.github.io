import React from 'react';
import { UnstyledButton, Overlay, Text } from '@mantine/core';
import classes from './CareerCard.module.css';

interface CareerCardProps {
  title: string;
  image: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, image }) => (
    <UnstyledButton
      style={{ backgroundImage: `url(${image})` }}
      className={classes.categoryCard}
      key={title}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
        {title}
      </Text>
    </UnstyledButton>
);

export default CareerCard;