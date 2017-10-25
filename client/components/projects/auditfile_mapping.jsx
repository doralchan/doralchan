import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import MapAdjustments from '../../assets/images/auditfile/mapping_adjustments.png';
import MapFinancial from '../../assets/images/auditfile/mapping_financial.png';
import MapLeadsheets from '../../assets/images/auditfile/mapping_leadsheets.png';
import MapPortal from '../../assets/images/auditfile/mapping_portal.png';
import MapTeam from '../../assets/images/auditfile/mapping_team.png';
import MapTrial from '../../assets/images/auditfile/mapping_trial.png';

class AuditfileMapping extends React.Component {
  renderIntro() {
    return (
      <Slide title='Mapping'>
        <Slide.Block subtitle='Project Context'>
          Auditors have a lot of expertise. They know exactly what their
          procedures are and can give a general gist of what they need to do per
          section but a lot of it is repetitive. All they need to do is ensure
          they are completing the massive list of to do's per engagement.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          Get a broad overview of UX consistency and see if any of these actions
          can be optimized. For the most complex sections, document the types of
          actions performed such as adding, creating, removing, verifying,
          uploading, downloading, editing, deleting, approving, rejecting, etc.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          Action mapping helped us understand the frequency of each action. More
          often than not, we recognized the most common actiona was to verify
          calculations. If these calculations were off, it was a matter of
          contacting the person responsible for this section to recalculate. 
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
          <Slide><Image imageLink={ MapAdjustments } /></Slide>
          <Slide><Image imageLink={ MapLeadsheets } /></Slide>
          <Slide><Image imageLink={ MapPortal } /></Slide>
          <Slide><Image imageLink={ MapTeam } /></Slide>
          <Slide><Image imageLink={ MapTrial } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default AuditfileMapping
