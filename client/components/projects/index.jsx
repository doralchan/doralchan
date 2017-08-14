import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';

import SFMoma from '../../assets/illustrations/illo-sfmoma.svg';
import Cloud from '../../assets/illustrations/illo-cloud.svg';
import Truck from '../../assets/illustrations/illo-truck.svg';
import Van from '../../assets/illustrations/illo-van.svg';
import Car1 from '../../assets/illustrations/illo-car-blue.svg';
import Car2 from '../../assets/illustrations/illo-car-pink.svg';
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
        <Illustration.Item imageLink={ Cloud } className='cloud-3' type='cloud' />
        <Illustration.Item imageLink={ Cloud } className='cloud-4' type='cloud'/>
        <Illustration.Item imageLink={ Truck } className='truck' type='vehicle' />
        <Illustration.Item imageLink={ Van } className='van' type='vehicle' />
        <Illustration.Item imageLink={ Bus } className='bus' type='vehicle' />
        <Illustration.Item imageLink={ Car1 } className='car-1' type='vehicle' />
        <Illustration.Item imageLink={ Car2 } className='car-2' type='vehicle' />
        <Illustration.Item imageLink={ SFMoma } className='sf-moma' />
      </Illustration>
    )
  }

  renderHeader() {
    return (
      <Header title='Projects'>
        <p>
          These are a few recent projects that I've been working on
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
