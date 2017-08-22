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
    return (
      <Illustration>
        <Illustration.Item imageLink={ CargoShip } className='ship' />
      </Illustration>
    )
  }

  renderHeader() {
    return (
      <Header title='Toolkits' className='toolkit-header'>
        <ContentBlocks>
          <ContentBlocks.Item title='Visual Graphics' className='content-block-3'>
            <List>
              <List.Item fill={ 4 }>Adobe Illustrator</List.Item>
              <List.Item fill={ 3 }>Adobe Photoshop</List.Item>
              <List.Item fill={ 3 }>Adobe Premiere Pro</List.Item>
              <List.Item fill={ 4 }>Hand Drawing</List.Item>
            </List>
          </ContentBlocks.Item>
          <ContentBlocks.Item title='User Experience & Interface' className='content-block-3'>
            <List>
              <List.Item fill={ 4 }>Sketch</List.Item>
              <List.Item fill={ 4 }>Invision</List.Item>
              <List.Item fill={ 3 }>UXPin</List.Item>
              <List.Item fill={ 4 }>Balsamiq</List.Item>
            </List>
          </ContentBlocks.Item>
          <ContentBlocks.Item title='Front End Development' className='content-block-3'>
            <List>
              <List.Item fill={ 3 }>React</List.Item>
              <List.Item fill={ 2 }>Vue</List.Item>
              <List.Item fill={ 4 }>CSS Modules</List.Item>
              <List.Item fill={ 4 }>SCSS</List.Item>
            </List>
          </ContentBlocks.Item>
        </ContentBlocks>
      </Header>
    )
  }

  renderActions() {
    return (
      <div className='btn-next'>
        <Button toLink='/' className='btn-secondary'>Back</Button>
        <Button toLink='/processes' className='btn-primary'>Process</Button>
      </div>
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
        { this.renderActions() }
      </Container>
   );
  }
}

export default Toolkit
