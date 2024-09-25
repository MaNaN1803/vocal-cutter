// pages/index.js
import { Container, Title, Text, Button, Group, Space, Paper, Tooltip, Progress, Switch } from '@mantine/core';
import { useState } from 'react';
import AudioShowcase from '../components/AudioShowcase';

export default function Home() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCutAudio = () => {
    if (file) {
      // Simulate cutting process with a progress bar
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 100));
        if (progress === 100) clearInterval(interval);
      }, 300);
    }
  };

  const resetFile = () => {
    setFile(null);
    setProgress(0);
  };

  return (
    <Container style={{ textAlign: 'center', paddingTop: '50px' }}>
      <Group position="apart">
        <Title order={1}>Audio Cutter</Title>
        <Switch label="Dark mode" checked={darkMode} onChange={() => setDarkMode((prev) => !prev)} />
      </Group>
      <Text>Upload your audio file and select the portion you want to cut.</Text>

      <Space h="md" />
      <Tooltip label="Select an audio file">
        <input type="file" accept="audio/*" onChange={handleFileChange} />
      </Tooltip>

      <Space h="md" />
      <Group position="center">
        <Tooltip label="Click to start cutting the audio">
          <Button onClick={handleCutAudio}>Cut Audio</Button>
        </Tooltip>
        <Button color="gray" onClick={resetFile}>Reset</Button>
      </Group>

      <Space h="xl" />
      {file && <AudioShowcase file={file} />}

      <Space h="md" />
      {progress > 0 && <Progress value={progress} animate />}
    </Container>
  );
}
