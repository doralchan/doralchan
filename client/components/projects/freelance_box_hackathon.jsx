import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import Box1 from '../../assets/images/freelance/box_hackathon1.png';
import Box2 from '../../assets/images/freelance/box_hackathon2.png';
import Box3 from '../../assets/images/freelance/box_hackathon3.png';
import Box4 from '../../assets/images/freelance/box_hackathon4.png';

class FreelanceBoxHackathon extends React.Component {
  renderIntro() {
    return (
      <Slide title='Box Hackathon'>
        <Slide.Block subtitle='Project Context'>
          Every year, Box holds a 24 hour hackathon with the prospect of winning
          prizes and recognition. There is a popular vote and a panel vote. Anyone
          can submit and vote. The idea was to have a big reveal at the end,
          concluding the event.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          Box needed a method to publish videos and vote. By that time, they had
          already decided to theme it based off of the Lego Movie.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          There were two user types in this case - the typical voter (boxers) and
          panel voter. The votes were weighted differently. Boxers could generally
          vote and determine which ones they liked with a simple upvote or like whereas
          panel voters were required to vote per prize category. This broke down into
          3 steps for panel voters: selecting the category, highlighting the entries
          they liked per category, and then ranking them accordingly. This would
          allow runner ups to emerge from the tally. 
        </Slide.Block>
      </Slide>
    );
  }

  render() {
    return (
      <Panel panelProject='box hackathon'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ Box1 } /></Slide>
          <Slide><Image imageLink={ Box2 } /></Slide>
          <Slide><Image imageLink={ Box3 } /></Slide>
          <Slide><Image imageLink={ Box4 } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default FreelanceBoxHackathon
