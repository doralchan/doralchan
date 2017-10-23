import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import Box1 from '../../assets/images/freelance/box_works1.png';
import Box2 from '../../assets/images/freelance/box_works2.png';
import Box3 from '../../assets/images/freelance/box_works3.png';
import Box4 from '../../assets/images/freelance/box_works4.png';
import Box5 from '../../assets/images/freelance/box_works5.png';
import Box6 from '../../assets/images/freelance/box_works6.png';

class FreelanceBoxWorks extends React.Component {
  renderIntro() {
    return (
      <Slide title='Box Works'>
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
      <Panel panelProject='box works'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ Box1 } /></Slide>
          <Slide><Image imageLink={ Box2 } /></Slide>
          <Slide><Image imageLink={ Box3 } /></Slide>
          <Slide><Image imageLink={ Box4 } /></Slide>
          <Slide><Image imageLink={ Box5 } /></Slide>
          <Slide><Image imageLink={ Box6 } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default FreelanceBoxWorks
