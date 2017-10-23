import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import Jungle1 from '../../assets/images/freelance/jungle_1.png';
import Jungle2 from '../../assets/images/freelance/jungle_2.png';
import Jungle3 from '../../assets/images/freelance/jungle_3.png';
import Jungle4 from '../../assets/images/freelance/jungle_4.png';
import Jungle5 from '../../assets/images/freelance/jungle_5.png';
import Jungle6 from '../../assets/images/freelance/jungle_6.png';

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
          <Slide><Image imageLink={ Jungle1 } /></Slide>
          <Slide><Image imageLink={ Jungle2 } /></Slide>
          <Slide><Image imageLink={ Jungle3 } /></Slide>
          <Slide><Image imageLink={ Jungle4 } /></Slide>
          <Slide><Image imageLink={ Jungle5 } /></Slide>
          <Slide><Image imageLink={ Jungle6 } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default FreelanceJungle
