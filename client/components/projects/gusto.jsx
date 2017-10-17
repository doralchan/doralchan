import React from 'react';
import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import './styles.scss';

class Gusto extends React.Component {
  renderGuide() {
    return (
      <Carousel>
        <Slide title='design guide'>
          <Slide.Block subtitle='project problem'>
            With the rapid growth of the company, large inconsistencies were
            developing between mission teams. There was uncertainty in what
            UI was available, what paradigms were available, and where assets
            were stored.
          </Slide.Block>
          <Slide.Block subtitle='project goal'>
            The motivation was to fill these knowledge gaps not only for
            designers and developers, but for the rest of the company as well.
            I wanted to create a long term solution that could evolve as the
            company evolves.
          </Slide.Block>
          <Slide.Block subtitle='project resolution'>
            After researching the biggest internal pain points, I recognized
          </Slide.Block>
        </Slide>
        <Slide>
          This is an image slide
        </Slide>
        <Slide>
          This is an image slide
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
          Ok
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
