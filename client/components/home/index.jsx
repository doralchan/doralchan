import React from 'react';

import Container from '../../shared/container/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';

import Ferry from '../../assets/illustrations/illo-ferry.svg';
import Cloud from '../../assets/illustrations/illo-cloud.svg';
import Plane from '../../assets/illustrations/illo-plane.svg';
import Bird from '../../assets/illustrations/illo-bird.svg';

import './styles.scss'

class Home extends React.Component {
  renderButtons() {
    return(
      <div className='btn-group'>
        <Button toLink='link-skillset' className='btn-primary'>Tell Me More</Button>
        <Button toLink='link-projects' className='btn-secondary'>Show Me More</Button>
      </div>
    );
  }

  renderIllo() {
    return(
      <div className='illo-group'>
        <img src={ Ferry } className='illo-ferry' />
        <img src={ Plane } className='illo-plane' />
        <img src={ Cloud } className='illo-cloud cloud-1' />
        <img src={ Cloud } className='illo-cloud cloud-2' />
        <img src={ Bird } className='illo-bird bird-1' />
        <img src={ Bird } className='illo-bird bird-2' />
      </div>
    )
  }

  renderHeader() {
    return(
      <Header title='Hello'>
        <p>
          I'm glad you're here! My name is Dora.
        </p>
        <p>
          I'm a product designer with a background in visual graphics, user
          experience, front-end development and systems design.
        </p>
        <p>
          Interested in what I'm tinkering around with? Feel free to look
          around.
        </p>
      </Header>
    );
  }

  render() {
    return(
     <Container idName='home'>
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
