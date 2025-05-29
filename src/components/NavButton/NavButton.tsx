import React from 'react';
import { Button } from '@mantine/core';

interface NavButtonProps {
  href: string;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, label }) => (
    <Button
        component="a"
        href={href}
        size="lg"
        radius="md"
    >
        {label}
    </Button>
);

export default NavButton;