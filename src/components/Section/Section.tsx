import { Box, BoxProps, createPolymorphicComponent, Title } from '@mantine/core';
import { ReactNode } from 'react';

interface SectionProps extends BoxProps {
  children: ReactNode;
  title: string;
  alternate?: boolean;
}

const _Section = ({ children, title, alternate = false, ...others }: SectionProps) => {
  return (
    <Box
      component="section"
      pb="xl"
      bg={alternate ? 'gray.0' : 'white'}
      {...others}
    >
      <Title order={2} fz="2rem" ta="center" pt="xl" pb="md" mb="md">
        {title}
      </Title>
      {children}
    </Box>
  );
};

export const Section = createPolymorphicComponent<'section', SectionProps>(_Section);