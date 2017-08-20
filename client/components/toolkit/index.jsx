import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';
import ContentBlocks from '../../shared/content_blocks/index.jsx';

import CargoShip from '../../assets/illustrations/illo-ship.svg';

import './styles.scss';

class Toolkit extends React.Component {
  renderIllo() {
    return(
      <Illustration>
        <Illustration.Item imageLink={ CargoShip } className='ship' />
      </Illustration>
    )
  }

  renderHeader() {
    return(
      <Header title='Toolkits' className='toolkit-header'>
        <ContentBlocks>
          <ContentBlocks.Item title='Visual Graphics' className='content-block-3'>
            The tools that help me envision
          </ContentBlocks.Item>
          <ContentBlocks.Item title='User Experience' className='content-block-3'>
            The tools that help me plan
          </ContentBlocks.Item>
          <ContentBlocks.Item title='Development' className='content-block-3'>
           The tools that help me build
          </ContentBlocks.Item>
        </ContentBlocks>
      </Header>
    )
  }

  render() {
    return (
      <Container idName='toolkit'>
        <Navigation />
        <Panel className='toolkit'>
          { this.renderHeader() }
          { this.renderIllo() }
          <Panel.Background className='toolkit-background' />
        </Panel>
        <Button toLink='/processes' className='btn-primary btn-next'>Process</Button>
      </Container>
   );
  }
}

export default Toolkit
