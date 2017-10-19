import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import GuideImage1 from '../../assets/images/gusto_guide_1.png';

import './styles.scss';

class Gusto extends React.Component {
  renderGuide() {
    return (
      <Carousel>
        <Slide title='design guide'>
          <Slide.Block subtitle='project context'>
            With the rapid growth and rebranding of the company, large
            inconsistencies were developing between teams. There was uncertainty
            about what UI components, UX paradigms, and assets were available to
            product and marketing. Undocumented, tribal knowledge became the norm.
          </Slide.Block>
          <Slide.Block subtitle='project goal'>
            The motivation was to fill these knowledge gaps for a majority of
            the teams including designers, developers, product managers, marketing,
            and sales. I wanted to create a long term solution that would
            constantly reflect the evolving state of the company.
          </Slide.Block>
          <Slide.Block subtitle='project direction'>
            To further investigate painpoints beyond those of my own team, I sent
            out surveys to
          </Slide.Block>
        </Slide>
        <Slide>
          <Image imageLink={ GuideImage1 } />
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
        <Slide title='onboarding'>
          <Slide.Block subtitle='project context'>

          </Slide.Block>
          <Slide.Block subtitle='project goal'>
            The motivation was to fill these knowledge gaps not only for
            designers and developers, but for the rest of the company as well.
            I wanted to create a long term solution that could evolve as the
            company evolves.
          </Slide.Block>
          <Slide.Block subtitle='project direction'>
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
      </Carousel>
    );
  }

  renderChat() {
    return (
      <Carousel>
        <Slide title='chat'>
          <Slide.Block subtitle='project context'>
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
          <Slide.Block subtitle='project direction'>
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
      </Carousel>
    );
  }

  renderGarnishments() {
    return (
      <Carousel>
        <Slide title='garnishments'>
          <Slide.Block subtitle='project context'>
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
          <Slide.Block subtitle='project direction'>
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
      </Carousel>
    );
  }

  render() {
    return (
      <div className='panel-group'>
        <Panel panelName='gusto' />
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
