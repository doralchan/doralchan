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
          Previous to the company offering of benefits, chat was not required
          to meet HIPPAA compliance. With this new release,  

        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          Design and build chat utilizing the Zendesk API, while reinforcing
          the brand.
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
          <Slide><Image imageLink={ ChatOnRea } /></Slide>
          <Slide><Image imageLink={ ChatOnPro } /></Slide>
          <Slide><Image imageLink={ ChatOff } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default GustoChat
