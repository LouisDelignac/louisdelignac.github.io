import { Container, Text } from '@mantine/core';
import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text ta="center" c="dimmed" size="sm">
            © 2025 Louis Delignac
        </Text>
      </Container>
    </div>
  );
}

export default Footer;