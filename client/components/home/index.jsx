import React from 'react';

import Container from '../../shared/container/index.jsx';
import Header from '../../shared/header/index.jsx';

import Intro from '../intro/index.jsx';
import About from '../about/index.jsx';
import Skills from '../skills/index.jsx';
import Process from '../process/index.jsx';
import Projects from '../projects/index.jsx';
import Contact from '../contact/index.jsx';

import './styles.scss';

class Home extends React.Component {

  render() {
    return (
      <Container idName='home'>
        <Header />
        <Intro />
        <About />
        <Skills />
        <Process />
        <Projects />
        <Contact />
      </Container>
    );
  }
}

export default Home
