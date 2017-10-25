import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import EngOverview from '../../assets/images/auditfile/engagement_overview.png';
import EngPlanning from '../../assets/images/auditfile/engagement_planning.png';

class AuditfileTrialbalance extends React.Component {
  renderIntro() {
    return (
      <Slide title='Trial Balance'>
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
      <Panel panelProject='trial balance'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ EngOverview } /></Slide>
          <Slide><Image imageLink={ EngPlanning } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default AuditfileTrialbalance
