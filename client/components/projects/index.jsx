import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';

import SFMoma from '../../assets/illustrations/illo-sfmoma.svg';
import Bus from '../../assets/illustrations/illo-bus.svg';

import './styles.scss';

class Projects extends React.Component {
  renderButtons() {
    return (
      <div className='btn-group'>
        <Button toLink='/contact' className='btn-primary'>Let's Chat</Button>
        <Button toLink='/processes' className='btn-secondary'>Processes</Button>
      </div>
    )
  }

  renderIllo() {
    return(
      <Illustration>
        <img src={ SFMoma } className='illo-item sf-moma' />
        <img src={ Bus } className='illo-item bus bus-3' />
      </Illustration>
    )
  }

  renderHeader() {
    return (
      <Header title='Projects'>
        <p>
          Coming Soon
        </p>
      </Header>
    )
  }

  render() {
    return (
      <Container idName='projects'>
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

export default Projects
