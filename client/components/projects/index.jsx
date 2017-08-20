import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';
import ContentCards from '../../shared/content_cards/index.jsx';

import SFMoma from '../../assets/illustrations/illo-sfmoma.svg';
import Truck from '../../assets/illustrations/illo-truck.svg';
import Van from '../../assets/illustrations/illo-van.svg';
import Car1 from '../../assets/illustrations/illo-car-blue.svg';
import Car2 from '../../assets/illustrations/illo-car-pink.svg';
import Bus from '../../assets/illustrations/illo-bus.svg';

import './styles.scss';

class Projects extends React.Component {
  renderIllo() {
    return(
      <Illustration>
        <Illustration.Item imageLink={ Truck } className='truck' />
        <Illustration.Item imageLink={ Van } className='van' />
        <Illustration.Item imageLink={ Bus } className='bus-3' />
        <Illustration.Item imageLink={ Car1 } className='car car-1' />
        <Illustration.Item imageLink={ Car2 } className='car car-2' />
        <Illustration.Item imageLink={ SFMoma } className='sf-moma' />
      </Illustration>
    )
  }

  renderGallery() {
    return (
      <ContentCards>
        <ContentCards.Item title='Project A'>
          This is a description
        </ContentCards.Item>
        <ContentCards.Item title='Project B'>
          This is a description
        </ContentCards.Item>
        <ContentCards.Item title='Project C'>
          This is a description
        </ContentCards.Item>
        <ContentCards.Item title='Project D'>
          This is a description
        </ContentCards.Item>
        <ContentCards.Item title='Project E'>
          This is a description
        </ContentCards.Item>
        <ContentCards.Item title='Project F'>
          This is a description
        </ContentCards.Item>
        <ContentCards.Item title='Project G'>
          This is a description
        </ContentCards.Item>
        <ContentCards.Item title='Project H'>
          This is a description
        </ContentCards.Item>
        <ContentCards.Item title='Project I'>
          This is a description
        </ContentCards.Item>
      </ContentCards>
    )
  }

  renderHeader() {
    return (
      <Header title='Projects' className='projects-header'>
        { this.renderGallery() }
      </Header>
    )
  }

  render() {
    return (
      <Container idName='projects'>
        <Navigation />
        <Panel className='projects'>
          { this.renderHeader() }
          { this.renderIllo() }
          <Panel.Background className='projects-background' />
        </Panel>
        <Button toLink='/contact' className='btn-primary btn-next'>
          Let's Chat
        </Button>
      </Container>
    );
  }
}

export default Projects
