import React from 'react';
import { Fade } from 'react-reveal';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import GuideHome from '../../assets/images/guide_home.png';
import GuideBrand from '../../assets/images/guide_brand_identity.png';
import GuideElements from '../../assets/images/guide_product_elements.png';
import GuideHelpers from '../../assets/images/guide_product_helpers.png';
import GuideResearch from '../../assets/images/guide_research_interviews.png';
import GuideActions from '../../assets/images/guide_usability_actions.png';
import GuideWorkflows from '../../assets/images/guide_usability_workflows.png';

import ChatOffPro from '../../assets/images/chat_offline_proactive.png';
import ChatOffRea from '../../assets/images/chat_offline_reactive.png';
import ChatOnPro from '../../assets/images/chat_online_proactive.png';
import ChatOnReaA from '../../assets/images/chat_online_reactive_a.png';
import ChatOnReaB from '../../assets/images/chat_online_reactive_b.png';

import './styles.scss';

class Gusto extends React.Component {
  renderGuide() {
    return (
      <Carousel>
        <Slide title='The Guide'>
          <Slide.Block subtitle='Project Context'>
            With the rapid growth and rebranding of the company, large
            inconsistencies were developing between teams. There was uncertainty
            about what UI components, UX paradigms, and assets were available to
            product and marketing. Undocumented, tribal knowledge became the norm.
          </Slide.Block>
          <Slide.Block subtitle='Project Goal'>
            The motivation was to fill these knowledge gaps for a majority of
            the teams including designers, developers, product managers, marketing,
            and sales. I wanted to create a long term solution that would
            constantly reflect the evolving state of the company.
          </Slide.Block>
          <Slide.Block subtitle='Project Direction'>
            To further investigate issues beyond those of my own team, I sent
            out surveys to understand the needs of the company.
          </Slide.Block>
        </Slide>
        <Slide><Image imageLink={ GuideHome } /></Slide>
        <Slide><Image imageLink={ GuideBrand } /></Slide>
        <Slide><Image imageLink={ GuideElements } /></Slide>
        <Slide><Image imageLink={ GuideHelpers } /></Slide>
        <Slide><Image imageLink={ GuideResearch } /></Slide>
        <Slide><Image imageLink={ GuideActions } /></Slide>
        <Slide><Image imageLink={ GuideWorkflows } /></Slide>
      </Carousel>
    );
  }

  renderOnboarding() {
    return (
      <Carousel>
        <Slide title='Onboarding'>
          <Slide.Block subtitle='Project Context'>
            TBD
          </Slide.Block>
          <Slide.Block subtitle='Project Goal'>
            TBD
          </Slide.Block>
          <Slide.Block subtitle='Project Direction'>
            TBD
          </Slide.Block>
        </Slide>
        <Slide>TBD</Slide>
      </Carousel>
    );
  }

  renderChat() {
    return (
      <Carousel>
        <Slide title='Chat'>
          <Slide.Block subtitle='Project Context'>
            TBD
          </Slide.Block>
          <Slide.Block subtitle='Project Goal'>
            TBD
          </Slide.Block>
          <Slide.Block subtitle='Project Direction'>
            TBD
          </Slide.Block>
        </Slide>
        <Slide><Image imageLink={ ChatOnReaA } /></Slide>
        <Slide><Image imageLink={ ChatOnReaB } /></Slide>
        <Slide><Image imageLink={ ChatOnPro } /></Slide>
        <Slide><Image imageLink={ ChatOffPro } /></Slide>
        <Slide><Image imageLink={ ChatOffRea } /></Slide>
      </Carousel>
    );
  }

  renderGarnishments() {
    return (
      <Carousel>
        <Slide title='Garnishments'>
          <Slide.Block subtitle='Project Context'>
            TBD
          </Slide.Block>
          <Slide.Block subtitle='Project Goal'>
            TBD
          </Slide.Block>
          <Slide.Block subtitle='Project Direction'>
            TBD
          </Slide.Block>
        </Slide>
        <Slide><Image imageLink={ ChatOnReaA } /></Slide>
        <Slide><Image imageLink={ ChatOnReaB } /></Slide>
        <Slide><Image imageLink={ ChatOnPro } /></Slide>
        <Slide><Image imageLink={ ChatOffPro } /></Slide>
        <Slide><Image imageLink={ ChatOffRea } /></Slide>
      </Carousel>
    );
  }

  render() {
    return (
      <Fade top>
        <div className='panel-group'>
          <Panel panelName='gusto' />
          <Panel panelProject='the guide'>
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
      </Fade>
    );
  }
}

export default Gusto
