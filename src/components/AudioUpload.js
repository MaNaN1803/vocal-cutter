// src/components/AudioUpload.js
import { useState } from 'react';
import { Group, Text, Button, FileInput } from '@mantine/core';

export default function AudioUpload() {
  const [audioFile, setAudioFile] = useState(null);

  return (
    <Group direction="column" grow>
      <FileInput
        label="Upload your audio file"
        placeholder="Select file"
        onChange={setAudioFile}
      />
      {audioFile && (
        <Text size="sm" color="dimmed">
          Selected: {audioFile.name}
        </Text>
      )}
    </Group>
  );
}
