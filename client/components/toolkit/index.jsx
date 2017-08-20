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
          <ContentBlocks.Item title='Visual Graphics'>
            Enhancing designs through color and composition is important to me.
            It supplements the overall experience.
          </ContentBlocks.Item>
          <ContentBlocks.Item title='User Experience'>
            This is what enables me to be a product designer. 
          </ContentBlocks.Item>
          <ContentBlocks.Item title='Development'>
            TBD
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
        </Panel>
        <Button toLink='/processes' className='btn-primary btn-next'>Process</Button>
      </Container>
   );
  }
}

export default Toolkit
