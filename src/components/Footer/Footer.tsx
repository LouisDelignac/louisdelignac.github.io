import { Box, Text } from '@mantine/core';

function Footer() {
  return (
    <Box
      bg="gray.2"
      py="xs"
      style={{
        borderTop: '1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))',
      }}
    >
      <Text ta="center" c="dimmed" size="sm">
        © 2025 Louis Delignac. Built from scratch using TypeScript and React.
      </Text>
    </Box>
  );
}

export default Footer;
