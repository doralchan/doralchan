import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';

import FortMason from '../../assets/illustrations/illo-fortmason.svg';

import './styles.scss';

class Processes extends React.Component {
  renderButtons() {
    return(
      <div className='btn-group'>
        <Button toLink='/projects' className='btn-primary'>A Few Projects</Button>
        <Button toLink='/contact' className='btn-secondary'>Meet Me</Button>
      </div>
    )
  }

  renderIllo() {
    return(
      <Illustration>
        <img src={ FortMason } className='illo-item fortmason' />
      </Illustration>
    )
  }

  renderHeader() {
    return(
      <Header title='Process'>
        <p>
          When persuing design at the University of California (Berkeley), and
          University of Michigan (Ann Arbor), design did not start with an
          interface. It began with questions, hypotheses, and prototyping.
          This process led to qualitative discovery. The same applies for user
          research today. It is first and foremost, the most critical step to
          any project.
        </p>
      </Header>
    )
  }
  render() {
    return (
      <Container idName='processes'>
        <Navigation />
        <Panel>
          { this.renderHeader() }
          { this.renderButtons() }
          { this.renderIllo() }
        </Panel>
      </Container>
   );
  }
}

export default Processes
