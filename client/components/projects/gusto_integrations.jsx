import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import IntDash from '../../assets/images/gusto/integrations_dash.png';
import IntDir from '../../assets/images/gusto/integrations_directory.png';
import IntProfile from '../../assets/images/gusto/integrations_profile.png';
import IntOnb from '../../assets/images/gusto/integrations_onboarding.png';
import IntBen from '../../assets/images/gusto/integrations_benefits.png';
import IntShop from '../../assets/images/gusto/integrations_shopping.png';

class GustoIntegrations extends React.Component {
  renderIntro() {
    return (
      <Slide title='Integrations'>
        <Slide.Block subtitle='Project Context'>
          This was a project that required a thorough exploration of how
          co-branding would potentially work. Integrations 
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          TBD
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          TBD
        </Slide.Block>
      </Slide>
    );
  }

  render() {
    return (
      <Panel panelProject='integrations'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ IntDash } /></Slide>
          <Slide><Image imageLink={ IntDir } /></Slide>
          <Slide><Image imageLink={ IntProfile } /></Slide>
          <Slide><Image imageLink={ IntOnb } /></Slide>
          <Slide><Image imageLink={ IntBen } /></Slide>
          <Slide><Image imageLink={ IntShop } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default GustoIntegrations
