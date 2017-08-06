import React from 'react';

import Container from '../../shared/container/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';

import './styles.scss';

class Projects extends React.Component {
  renderButtons() {
    return (
      <div className='btn-group'>
        <Button toLink='link-contact' className='btn-primary'>Let's Chat</Button>
        <Button toLink='link-processes' className='btn-secondary'>Processes</Button>
      </div>
    )
  }

  renderHeader() {
    return (
      <Header title='Projects'>
        <p>
          Here are a few projects I’ve worked on over the past couple of years.
          Each reflects a different
        </p>
      </Header>
    )
  }

  render() {
    return (
      <Container idName='projects'>
        <Panel>
          { this.renderHeader() }
          { this.renderButtons() }
        </Panel>
      </Container>
    );
  }
}

export default Projects
