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
      <div>
        <img src={ Ferry } className='illustration-ferry' />
        <img src={ Cloud } className='illustration-cloud' />
        <img src={ Plane } className='illustration-plane' />
        <img src={ Bird } className='illustration-bird' />
      </div>
    )
  }

  renderHeader() {
    return(
      <Header title='Hello'>
        I'm Dora. I live and work in San Francisco. My background is in visual
        graphics, user experience, front-end development and systems design.
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
