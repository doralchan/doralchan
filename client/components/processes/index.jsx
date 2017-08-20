import React from 'react';

import Container from '../../shared/container/index.jsx';
import Illustration from '../../shared/illustration/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Button from '../../shared/button/index.jsx';
import Header from '../../shared/header/index.jsx';
import Navigation from '../../shared/navigation/index.jsx';
import ContentBlocks from '../../shared/content_blocks/index.jsx';

import FortMason from '../../assets/illustrations/illo-fortmason.svg';
import Bird from '../../assets/illustrations/illo-bird.svg';

import './styles.scss';

class Processes extends React.Component {
  renderIllo() {
    return(
      <Illustration>
        <Illustration.Item imageLink={ FortMason } className='fortmason' />
        <div className='circle clockwise large'>
          <Illustration.Item imageLink={ Bird } className='bird-1' />
        </div>
        <div className='circle counterclockwise small'>
          <Illustration.Item imageLink={ Bird } className='bird-2' />
        </div>
      </Illustration>
    )
  }

  renderHeader() {
    return(
      <Header title='Process' className='process-header'>
        <ContentBlocks>
          <ContentBlocks.Item className='content-block-2'>
            <p>
              When persuing design at the UC Berkeley, UM Ann Arbor, design did not
              start with an interface. It began with questions, hypotheses,
              prototypes and testing.
            </p>
          </ContentBlocks.Item>
          <ContentBlocks.Item className='content-block-2'>
            <p>
              These processes pave the way for qualitative discovery. The more user
              research I do, the more convinced I am design is a distinct methodology
              of pursuit.
            </p>
          </ContentBlocks.Item>
        </ContentBlocks>
      </Header>
    )
  }
  render() {
    return (
      <Container idName='process'>
        <Navigation />
        <Panel className='process'>
          { this.renderHeader() }
          { this.renderIllo() }
          <Panel.Background className='process-background' />
        </Panel>
        <Button toLink='/projects' className='btn-primary btn-next'>
          A Few Projects
        </Button>
      </Container>
   );
  }
}

export default Processes
