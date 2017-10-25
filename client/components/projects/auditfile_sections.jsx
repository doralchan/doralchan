import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import SectionAnalytical from '../../assets/images/auditfile/section_analytical.png';
import SectionAuditareas from '../../assets/images/auditfile/section_auditareas.png';
import SectionCashflow from '../../assets/images/auditfile/section_cashflow.png';
import SectionMLC from '../../assets/images/auditfile/section_mlc.png';
import SectionProgram from '../../assets/images/auditfile/section_program.png';
import SectionTrial from '../../assets/images/auditfile/section_trialbalance.png';

class AuditfileSections extends React.Component {
  renderIntro() {
    return (
      <Slide title='Sections'>
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
      <Panel panelProject='sections'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ SectionAnalytical } /></Slide>
          <Slide><Image imageLink={ SectionAuditareas } /></Slide>
          <Slide><Image imageLink={ SectionCashflow } /></Slide>
          <Slide><Image imageLink={ SectionMLC } /></Slide>
          <Slide><Image imageLink={ SectionProgram } /></Slide>
          <Slide><Image imageLink={ SectionTrial } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default AuditfileSections
