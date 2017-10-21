import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

class FreelanceJungle extends React.Component {
  renderIntro() {
    return (
      <Slide title='Jungle'>
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
      <Panel panelProject='jungle'>
        <Carousel>
          { this.renderIntro() }
          <Slide>TBD</Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default FreelanceJungle
