import React from 'react';

import Container from '../../shared/container/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';

import './styles.scss'

class Home extends React.Component {
  renderButtons() {
    return(
      <div>
        <Button toLink='link-skillset' className='btn-primary'>Tell Me More</Button>
        <Button toLink='link-projects' className='btn-secondary'>Show Me More</Button>
      </div>
    );
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
        </Panel>
     </Container>
    );
  }
}

export default Home
