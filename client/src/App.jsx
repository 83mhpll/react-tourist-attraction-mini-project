import React from 'react';
import HomePage from './pages/HomePage';
import { TripProvider } from './contexts/TripContext';
import './App.css';

function App() {
  return (
    <TripProvider>
      <div className="App">
        <HomePage />
      </div>
    </TripProvider>
  );
}

export default App;
