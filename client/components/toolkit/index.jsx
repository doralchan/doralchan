import React from 'react';

import Container from '../../shared/container/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';

import CargoShip from '../../assets/illustrations/illo-ship.svg';

import './styles.scss';

class Toolkit extends React.Component {
  renderButtons() {
    return(
      <div className='btn-group'>
        <Button toLink='link-processes' className='btn-primary'>Process</Button>
        <Button toLink='link-projects' className='btn-secondary'>A Few Projects</Button>
      </div>
    )
  }

  renderIllo() {
    return(
      <div className='illo-group'>
        <img src={ CargoShip } className='illo-item illo-ship' />
      </div>
    )
  }

  renderHeader() {
    return(
      <Header title='Toolkits'>
        <p>
          Experimenting with different mediums
        </p>
      </Header>
    )
  }

  render() {
    return (
      <Container idName='toolkit'>
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
