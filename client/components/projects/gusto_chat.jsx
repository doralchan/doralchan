import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import ChatOff from '../../assets/images/gusto/chat_offline.png';
import ChatOnRea from '../../assets/images/gusto/chat_online_reactive.png';
import ChatOnPro from '../../assets/images/gusto/chat_online_proactive.png';

class GustoChat extends React.Component {
  renderIntro() {
    return (
      <Slide title='Chat'>
        <Slide.Block subtitle='Project Context'>
          Previous to Gusto offering benefits, chat was not required to comply
          with the Health Insurance Portability and Accountability Act (HIPAA).
          With the new release of this product, we needed to immediately switch
          vendors while taking into account our existing care ticketing system.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          The goal was to design and implement a customer facing chat tool to
          be used by both product and sales. This needed to address future
          scaling needs and reinforce branding attributes.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          Major considerations in this project was internal team availability
          and the desire for automation. In a matrix, we were looking at online
          v. offline hours and proactive v. reactive interactions. Customers
          facing issues off hours were the most vulnerable. We wanted to try to
          anticipate and address their needs by proactively engaging with them
          through Gus, the bot.
        </Slide.Block>
      </Slide>
    );
  }

  render() {
    return (
      <Panel panelProject='chat'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ ChatOnRea } /></Slide>
          <Slide><Image imageLink={ ChatOff } /></Slide>
          <Slide><Image imageLink={ ChatOnPro } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default GustoChat
