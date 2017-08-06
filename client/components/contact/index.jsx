import React from 'react';

import Container from '../../shared/container/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';

import './styles.scss';

class Contact extends React.Component {
  renderButtons() {
    return(
      <div className='btn-group'>
        <Button toLink='link-projects' className='btn-primary'>Show Me Again</Button>
        <Button toLink='/' className='btn-secondary'>Start Over</Button>
      </div>
    )
  }

  renderHeader() {
    return(
      <Header title='Contact'>
        If you'd like to chat over a cup o' Philz, let me know. I'm always ready
        for caffeine @doralchan
      </Header>
    )
  }

  render() {
    return (
      <Container className='contact'>
        <Panel>
          { this.renderHeader() }
          { this.renderButtons() }
        </Panel>
      </Container>
    );
  }
}

export default Contact
