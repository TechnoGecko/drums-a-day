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
        colorScheme: 'dark'
      }}
    >
      <HomePage />
    </MantineProvider>
  );
}
