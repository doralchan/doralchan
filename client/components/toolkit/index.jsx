import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';
import ContentBlocks from '../../shared/content_blocks/index.jsx';
import List from '../../shared/list/index.jsx';

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
            <List>
              <List.Item fill={ 1 }>Adobe Illustrator</List.Item>
              <List.Item fill={ 2 }>Adobe Photoshop</List.Item>
              <List.Item fill={ 3 }>Final Cut Pro</List.Item>
              <List.Item fill={ 4 }>Hand Drawing</List.Item>
            </List>
          </ContentBlocks.Item>
          <ContentBlocks.Item title='User Experience' className='content-block-3'>
            <List>
              <List.Item fill={ 1 }>Sketch</List.Item>
              <List.Item fill={ 1 }>Invision</List.Item>
              <List.Item fill={ 1 }>UXPin</List.Item>
              <List.Item fill={ 1 }>Balsamiq</List.Item>
            </List>
          </ContentBlocks.Item>
          <ContentBlocks.Item title='Development' className='content-block-3'>
            <List>
              <List.Item fill={ 1 }>React</List.Item>
              <List.Item fill={ 1 }>Vue</List.Item>
              <List.Item fill={ 1 }>CSS Modules</List.Item>
              <List.Item fill={ 1 }>SCSS</List.Item>
            </List>
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
