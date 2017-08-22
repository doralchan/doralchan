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
  renderIllo() {
    return (
      <Illustration>
        <Illustration.Item imageLink={ DeYoung } className='deyoung' />
      </Illustration>
    )
  }

  renderHeader() {
    return (
      <Header title='Contact' className='contact-header'>
        <p>
          If you'd like to chat about design systems, economics, data science
          or board games, let me know. I have a strong interest in these
          topics.
        </p>
      </Header>
    )
  }

  renderActions() {
    return (
      <div className='btn-next'>
        <Button toLink='/projects' className='btn-secondary'>
          Back
        </Button>
        <a href='https://www.linkedin.com/in/doralchan/' target='_blank' className='btn btn-primary'>
          Send A Message
        </a>
      </div>
    )
  }

  render() {
    return (
      <Container idName='contact'>
        <Navigation />
        <Panel className='contact'>
          { this.renderHeader() }
          { this.renderIllo() }
          <Panel.Background className='contact-background' />
        </Panel>
        { this.renderActions() }
      </Container>
    );
  }
}

export default Contact
