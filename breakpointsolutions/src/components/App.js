import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage';
import Header from './Header';
import Logo from './Logo'
import Body from './Body';

function App() {
  return (
    <body>
      <Header />
      <Body />
    </body>
  );
}

export default App;