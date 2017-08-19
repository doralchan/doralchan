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
  renderButtons() {
    return(
      <div className='btn-group'>
        <Button toLink='/toolkit' className='btn-primary'>Tell Me More</Button>
      </div>
    );
  }

  renderIllo() {
    return(
      <Illustration>
        <Illustration.Item imageLink={ Plane } className='plane' type='plane'/>
        <Illustration.Item imageLink={ Bus } className='bus-1' type='vehicle' />
        <Illustration.Item imageLink={ Bus } className='bus-2' type='vehicle' />
        <Illustration.Item imageLink={ Ferry } className='ferry' />
      </Illustration>
    )
  }

  renderHeader() {
    return(
      <Header title='Hello'>
        <p>
          I'm glad you're here! My name is Dora.
        </p>
        <p>
          I'm a product designer with a background in user experience,
          front-end development and systems design. I also like to dabble in
          illustration sometimes.
        </p>
        <p>
          Interested in what I'm tinkering around with? Feel free to take
          a look around!
        </p>
      </Header>
    );
  }

  render() {
    return(
     <Container idName='home'>
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

export default Home
