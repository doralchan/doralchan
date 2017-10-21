import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import Garn1 from '../../assets/images/gusto/garnishment_1.png';
import Garn2 from '../../assets/images/gusto/garnishment_2.png';
import Garn3 from '../../assets/images/gusto/garnishment_3.png';
import Garn4 from '../../assets/images/gusto/garnishment_4.png';
import Garn5 from '../../assets/images/gusto/garnishment_5.png';
import Garn6 from '../../assets/images/gusto/garnishment_6.png';

class GustoGarn extends React.Component {
  renderIntro() {
    return (
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
    );
  }

  render() {
    return (
      <Panel panelProject='garnishments'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ Garn1 } /></Slide>
          <Slide><Image imageLink={ Garn2 } /></Slide>
          <Slide><Image imageLink={ Garn3 } /></Slide>
          <Slide><Image imageLink={ Garn4 } /></Slide>
          <Slide><Image imageLink={ Garn5 } /></Slide>
          <Slide><Image imageLink={ Garn6 } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default GustoGarn
