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
          This project was more for fun than anything else. I had just started
          playing a game on Steam called Shipwrecked, a version of Don't Starve.
          The game can be played collaboratively with other players and the
          objective is to survive as long as possible, continuously collecting
          resources to do so. You can construct a boat to travel between different
          deserted islands and in the meawhile, everything is working against
          you.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          While the graphics were Tim Burton-esque, I wanted to recreate aspects
          of the gaming experience and have them in a print-friendly form. Many
          of the concepts depicted in the game are intriguing and I wanted to
          represent them in a fun light hearted manner, the opposite of what it
          feels in the game.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          The most common scenes are represented in these illustrations. Our
          protagonist yields a torch and enters a number of scenes. I'm planning
          on spontaneously sending out some of these postcards to those
          collaborative players from the game.
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
