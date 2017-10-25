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
          I play board and card games very regularly. After playing Hanabi for
          the first time, a Japanese game with terrible graphics, I was
          disappointed. It required more mental processing power then necessary
          since users needed to parse the distracting visuals before taking
          each action. However, I liked the mechanics of the game so I sought
          to address it.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          Improve the dynamics of Hanabi.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          After choosing the theme of dinosaurs escaping an approaching meteor,
          I worked with another engineer to generate these cards automagically
          with javascript (as opposed to me carefully configuring the arrangement
          of each dinosaur). This is an open source project we created here.&nbsp;
          <a href='https://github.com/doralchan/dinobi-cards/blob/master/index.html'
          className='contact-area-link'>Dinobi</a>.
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
