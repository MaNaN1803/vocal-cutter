// pages/_app.js
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState('light');

  const toggleColorScheme = (value) =>
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
