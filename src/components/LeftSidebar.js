// src/components/LeftSidebar.js
import { Navbar, Button, Stack } from '@mantine/core';

export default function LeftSidebar() {
  return (
    <Navbar width={{ base: 250 }} padding="xs">
      <Stack spacing="xs">
        <Button variant="outline" color="blue">
          Trim
        </Button>
        <Button variant="outline" color="green">
          Fade In
        </Button>
        <Button variant="outline" color="red">
          Fade Out
        </Button>
      </Stack>
    </Navbar>
  );
}
