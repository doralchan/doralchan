import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';

import Ferry from '../../assets/illustrations/illo-ferry.svg';
import Bus from '../../assets/illustrations/illo-bus.svg';
import Plane from '../../assets/illustrations/illo-plane.svg';

import './styles.scss'

class Home extends React.Component {
  renderIllo() {
    return (
      <Illustration>
        <Illustration.Item imageLink={ Plane } className='plane' />
        <Illustration.Item imageLink={ Bus } className='bus bus-1' />
        <Illustration.Item imageLink={ Bus } className='bus bus-2' />
        <Illustration.Item imageLink={ Ferry } className='ferry' />
      </Illustration>
    )
  }

  renderHeader() {
    return (
      <Header title='Why, Hello' className='home-header'>
        <p>
          I'm glad you're here! My name is Dora. I'm a product designer with a
          background in user experience, front-end development and systems
          design. I also like to dabble in illustration sometimes.
        </p>
      </Header>
    );
  }

  renderActions() {
    return (
      <div className='btn-next'>
        <Button toLink='/toolkit' className='btn-primary'>
          Tell Me More
        </Button>
      </div>
    )
  }

  render() {
    return (
     <Container idName='home'>
        <Navigation />
        <Panel className='home'>
          { this.renderHeader() }
          { this.renderIllo() }
          <Panel.Background className='home-background' />
        </Panel>
        { this.renderActions() }
     </Container>
    );
  }
}

export default Home
