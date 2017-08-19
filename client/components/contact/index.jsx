import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';

import DeYoung from '../../assets/illustrations/illo-deyoung.svg';

import './styles.scss';

class Contact extends React.Component {
  renderIllo() {
    return(
      <Illustration>
        <Illustration.Item imageLink={ DeYoung } className='deyoung' />
      </Illustration>
    )
  }

  renderHeader() {
    return(
      <Header title='Contact'>
        <p>
          If you'd like to chat about design systems, economics, data science
          or board games, let me know. I have a strong interest in these
          topics.
        </p>
      </Header>
    )
  }

  render() {
    return (
      <Container className='contact'>
        <Navigation />
        <Panel className='contact'>
          { this.renderHeader() }
          { this.renderIllo() }
        </Panel>
        <a href='https://www.linkedin.com/in/doralchan/' target='_blank' className='btn btn-primary btn-next'>
          Send A Message
        </a>
      </Container>
    );
  }
}

export default Contact
