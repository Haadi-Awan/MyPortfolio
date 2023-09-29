import React from 'react'; // Import React
import styled, { ThemeProvider } from "styled-components"; // Import styled-components and ThemeProvider
import { darkTheme } from './utils/themes'; // Import your theme
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter as  Router } from 'react-router-dom';
import Projects from './components/Projects';
import Education from './components/Study';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
      <Navbar/>
      <Body>
        <Hero/>
        <Wrapper>
          <Skills/>
          <Education/>
        </Wrapper>
      </Body>
      <Projects/>
      <Contact/>
      <Footer/>
    </Router>
      
    </ThemeProvider>
  );
}

export default App;
