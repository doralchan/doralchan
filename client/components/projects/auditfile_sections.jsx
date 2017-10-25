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
          With so many unique sections within engagements, a lot of focus was
          required on these individual sections. Within each section are different
          tasks - tasks ranging everywhere from csv uploads to simple sign offs.
          These were selected and assigned per engagement early on in the process
          depending on the client profile.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          Design the most commonly used sections that every auditor needs. Notable
          ones include cash flow, leadsheets and trial balances. The goal
          was to help automate some of these complex calculations and provide a
          standard protocol per task.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          After highlighting key sections, we interviewed a handful of customers
          about each task and observed them entering data in. Everything was done
          through excel spreadsheets. They often went back and forth in files,
          and needed to reference resources found in paperwork. We tried to minimize
          this manual work in each and every section.
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
