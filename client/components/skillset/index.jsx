import React from 'react';

import Container from '../../shared/container/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';

import './styles.scss';

class Skillset extends React.Component {
  renderButtons() {
    return(
      <div>
        <Button toLink='link-projects' className='btn-primary'>A Few Projects</Button>
        <Button toLink='link-processes' className='btn-secondary'>Processes</Button>
      </div>
    )
  }

  renderHeader() {
    return(
      <Header title='Skillset'>
        I’ve built up some pretty decent experience from my broad design
        background. It's neat to use test out new mediums
      </Header>
    )
  }

  render() {
    return (
      <Container idName='skillset'>
        <Panel>
          { this.renderHeader() }
          { this.renderButtons() }
        </Panel>
      </Container>
   );
  }
}

export default Skillset
