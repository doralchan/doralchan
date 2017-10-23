import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import Dinobi from '../../assets/images/freelance/dinobi.png';

class FreelanceDinobi extends React.Component {
  renderIntro() {
    return (
      <Slide title='Dinobi'>
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
      <Panel panelProject='dinobi'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ Dinobi } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default FreelanceDinobi
