import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';

import CargoShip from '../../assets/illustrations/illo-ship.svg';

import './styles.scss';

class Toolkit extends React.Component {
  renderButtons() {
    return(
      <div className='btn-group'>
        <Button toLink='/processes' className='btn-primary'>Process</Button>
        <Button toLink='/projects' className='btn-secondary'>A Few Projects</Button>
      </div>
    )
  }

  renderIllo() {
    return(
      <Illustration>
        <img src={ CargoShip } className='illo-item ship' />
      </Illustration>
    )
  }

  renderHeader() {
    return(
      <Header title='Toolkits'>
        <p>
          I've had the luck of getting access to a lot of spectacular tools out
          there. By working in both design and development, I've been able to
          link and utilize both
        </p>
      </Header>
    )
  }

  render() {
    return (
      <Container idName='toolkit'>
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

export default Toolkit
