// src/pages/index.js
import { Container, Grid, Paper } from '@mantine/core';
import AudioUpload from '../components/AudioUpload';
import AudioShowcase from '../components/AudioShowcase';
import LeftSidebar from '../components/LeftSidebar';
import Header from '../components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <Grid>
        <Grid.Col span={3}>
          <LeftSidebar />
        </Grid.Col>
        <Grid.Col span={6}>
          <AudioUpload />
          <AudioShowcase />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
