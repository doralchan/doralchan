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
import IntHome from '../../assets/images/gusto/integrations_home.png';
import IntEmployee from '../../assets/images/gusto/integrations_employees.png';

class GustoIntegrations extends React.Component {
  renderIntro() {
    return (
      <Slide title='Integrations'>
        <Slide.Block subtitle='Project Context'>
          This was a project that required a thorough exploration of how
          integrations could work within other applications. A few studies
          included in this deck are with Quickbooks and Square.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          Demonstrating value props of the platform through potential partnerships.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          This required product research and a delicate balancing act between
          different brands. Promoting the primary brand while preserving key
          aspects of Gusto was a great challenge.
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
          <Slide><Image imageLink={ IntHome } /></Slide>
          <Slide><Image imageLink={ IntEmployee } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default GustoIntegrations
