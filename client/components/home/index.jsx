import React from 'react';

import Container from '../../shared/container/index.jsx';
import Header from '../../shared/header/index.jsx';

import Intro from './s_intro.jsx';
import About from './s_about.jsx';
import Skills from './s_skills.jsx';
import Process from './s_process.jsx';
import Projects from './s_projects.jsx';
import Contact from './s_contact.jsx';

import './styles.scss'

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
