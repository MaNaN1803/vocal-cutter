// src/components/CutterControls.js
import { Slider, Button, Group } from '@mantine/core';

export default function CutterControls() {
  return (
    <Group direction="column" grow>
      <Slider label="Cut start time" />
      <Slider label="Cut end time" />
      <Button color="blue">Cut Audio</Button>
    </Group>
  );
}
