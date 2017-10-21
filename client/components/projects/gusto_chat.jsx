import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import ChatOffPro from '../../assets/images/gusto/chat_offline_proactive.png';
import ChatOffRea from '../../assets/images/gusto/chat_offline_reactive.png';
import ChatOnPro from '../../assets/images/gusto/chat_online_proactive.png';
import ChatOnReaA from '../../assets/images/gusto/chat_online_reactive_a.png';
import ChatOnReaB from '../../assets/images/gusto/chat_online_reactive_b.png';
import ChatPhone from '../../assets/images/gusto/chat_phone_services.png';

class GustoChat extends React.Component {
  renderIntro() {
    return (
      <Slide title='Chat'>
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
      <Panel panelProject='chat'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ ChatOnReaA } /></Slide>
          <Slide><Image imageLink={ ChatOnReaB } /></Slide>
          <Slide><Image imageLink={ ChatOnPro } /></Slide>
          <Slide><Image imageLink={ ChatOffPro } /></Slide>
          <Slide><Image imageLink={ ChatOffRea } /></Slide>
          <Slide><Image imageLink={ ChatPhone } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default GustoChat
