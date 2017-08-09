import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';

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
          It's important to me to experiment with different mediums. Design can
          be inspired by
        </p>
      </Header>
    )
  }
  render() {
    return (
      <Container idName='processes'>
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
