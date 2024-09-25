// src/components/AudioShowcase.js
import { useState, useRef } from 'react';
import { Group, Button, Text } from '@mantine/core';

export default function AudioShowcase() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <Group direction="column" grow>
      <Button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</Button>
      <audio ref={audioRef} controls src="/path/to/audio/file.mp3">
        Your browser does not support the audio element.
      </audio>
    </Group>
  );
}
