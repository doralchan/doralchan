import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

class AuditfilePortal extends React.Component {
  renderIntro() {
    return (
      <Slide title='Portal'>
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
    );
  }

  render() {
    return (
      <Panel panelProject='portal'>
        <Carousel>
          { this.renderIntro() }
          <Slide>TBD</Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default AuditfilePortal
