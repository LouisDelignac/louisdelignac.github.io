import { Box, Text } from '@mantine/core';

function Footer() {
  return (
    <Box bg="gray.0" pt="sm" pb="sm">
      <Text ta="center" c="dimmed" size="sm">
          © 2025 Louis Delignac. Built from scratch using TypeScript, React, and Mantine Components.
      </Text>
    </Box>
  );
}

export default Footer;