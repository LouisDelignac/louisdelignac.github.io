import React from 'react';
import { Button } from '@mantine/core';

interface NavButtonProps {
  href: string;
  label: string;
  target?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, label, target = "_self" }) => (
  <Button
    component="a"
    href={href}
    target={target}
    size="lg"
    radius="md"
  >
    {label}
  </Button>
);

export default NavButton;