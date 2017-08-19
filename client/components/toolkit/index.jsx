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
  renderIllo() {
    return(
      <Illustration>
        <Illustration.Item imageLink={ CargoShip } className='ship' />
      </Illustration>
    )
  }

  renderHeader() {
    return(
      <Header title='Toolkits'>
        <p>
          I've had the amazing luck of getting access to a lot of different
          tools over the years.
        </p>
        <p>
          At this point, I believe there are no boundaries to imagination or
          implementation. It's a matter of continual experimentation and ongoing
          exposure to the resources actively being developed in the community.
        </p>
      </Header>
    )
  }

  render() {
    return (
      <Container idName='toolkit'>
        <Navigation />
        <Panel className='toolkit'>
          { this.renderHeader() }
          { this.renderIllo() }
        </Panel>
        <Button toLink='/processes' className='btn-primary btn-next'>Process</Button>
      </Container>
   );
  }
}

export default Toolkit
