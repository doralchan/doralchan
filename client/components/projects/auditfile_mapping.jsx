import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import MapFinancial from '../../assets/images/auditfile/mapping_financial.png';
import MapLeadsheets from '../../assets/images/auditfile/mapping_leadsheets.png';
import MapPortal from '../../assets/images/auditfile/mapping_portal.png';
import MapTrial from '../../assets/images/auditfile/mapping_trialbalance.png';

class AuditfileMapping extends React.Component {
  renderIntro() {
    return (
      <Slide title='Mapping'>
        <Slide.Block subtitle='Project Context'>
          TBD
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          Get a broad overview of the
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          TBD
        </Slide.Block>
      </Slide>
    );
  }

  render() {
    return (
      <Panel panelProject='mapping'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ MapFinancial } /></Slide>
          <Slide><Image imageLink={ MapLeadsheets } /></Slide>
          <Slide><Image imageLink={ MapPortal } /></Slide>
          <Slide><Image imageLink={ MapTrial } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default AuditfileMapping
