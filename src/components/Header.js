// src/components/Header.js
import { Header, Title, Group } from '@mantine/core';

export default function AppHeader() {
  return (
    <Header height={60} padding="xs">
      <Group position="apart" style={{ height: '100%' }}>
        <Title order={3} style={{ color: '#5C7AEA' }}>
          Vocal Cutter Pro
        </Title>
      </Group>
    </Header>
  );
}