// components/AudioShowcase.js
import { Paper, Text } from '@mantine/core';

const AudioShowcase = ({ file }) => {
  if (!file) return null;

  return (
    <Paper shadow="md" padding="lg">
      <Text>Selected file: {file.name}</Text>
      <audio controls src={URL.createObjectURL(file)}></audio>
    </Paper>
  );
};

export default AudioShowcase;
