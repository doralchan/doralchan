import React from 'react';
import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import './styles.scss';

class Gusto extends React.Component {
  renderGuide() {
    return (
      <Carousel>
        <Slide title='intro'>
          This is the intro slide
        </Slide>
        <Slide>
          This is an image slide
        </Slide>
        <Slide>
          This is an image slide
        </Slide>
      </Carousel>
    );
  }

  renderOnboarding() {
    return (
      <Carousel>
        <Slide>
          This is the intro slide
        </Slide>
        <Slide>
          This is an image slide
        </Slide>
        <Slide>
          This is an image slide
        </Slide>
      </Carousel>
    );
  }

  renderChat() {
    return (
      <Carousel>
        <Slide>
          This is the intro slide
        </Slide>
        <Slide>
          This is an image slide
        </Slide>
        <Slide>
          This is an image slide
        </Slide>
      </Carousel>
    );
  }

  renderGarnishments() {
    return (
      <Carousel>
        <Slide>
          This is the intro slide
        </Slide>
        <Slide>
          This is an image slide
        </Slide>
        <Slide>
          This is an image slide
        </Slide>
      </Carousel>
    );
  }

  render() {
    return (
      <div className='panel-group'>
        <Panel panelName='gusto'>
          TBD
        </Panel>
        <Panel panelProject='design guide'>
          { this.renderGuide() }
        </Panel>
        <Panel panelProject='onboarding'>
          { this.renderOnboarding() }
        </Panel>
        <Panel panelProject='chat'>
          { this.renderChat() }
        </Panel>
        <Panel panelProject='garnishments'>
          { this.renderGarnishments() }
        </Panel>
      </div>
    );
  }
}

export default Gusto
