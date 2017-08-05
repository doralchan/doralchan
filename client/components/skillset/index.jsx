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
        With a broad background in design, I’ve amassed a good list of
        hard and soft skills. This will forever be a work in progress
        since I never stop learning.
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
