import React from 'react';

import Container from '../../shared/container/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';

import './styles.scss';

class Processes extends React.Component {
  renderButtons() {
    return(
      <div>
        <Button toLink='link-projects' className='btn-primary'>In Action</Button>
        <Button toLink='link-contact' className='btn-secondary'>Meet Me</Button>
      </div>
    )
  }

  renderHeader() {
    return(
      <Header title='Process'>
        TBD
      </Header>
    )
  }
  render() {
    return (
      <Container idName='processes'>
        <Panel>
          { this.renderHeader() }
          { this.renderButtons() }
        </Panel>
      </Container>
   );
  }
}

export default Processes
