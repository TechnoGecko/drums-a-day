import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  HomePage,
  Metronome,
  PracticeSession,
  Routines
} from './pages/index';
import './App.css';
import { MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        radius: { xs: 3, sm: 5, md: 7, lg: 12, xl: 15 }
      }}
    >
      <HomePage />
    </MantineProvider>
  );
}
