import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';

import DeYoung from '../../assets/illustrations/illo-deyoung.svg';

import './styles.scss';

class Contact extends React.Component {
  renderButtons() {
    return(
      <div className='btn-group'>
        <Button toLink='/' className='btn-primary'>Show Me Again</Button>
        <a href='https://www.linkedin.com/in/doralchan/' target='_blank' className='btn btn-secondary'>Send A Message</a>
      </div>
    )
  }

  renderIllo() {
    return(
      <Illustration>
        <img src={ DeYoung } className='illo-item deyoung' />
      </Illustration>
    )
  }

  renderHeader() {
    return(
      <Header title='Contact'>
        <p>
          If you'd like to chat over a cup o' Philz, let me know. I'm always
          ready for caffeination.
        </p>
      </Header>
    )
  }

  render() {
    return (
      <Container className='contact'>
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

export default Contact
