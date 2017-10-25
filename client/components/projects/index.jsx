import React from 'react';
import { Fade } from 'react-reveal';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Number from '../../shared/number/index.jsx';

import GustoGuide from './gusto_guide.jsx';
import GustoOnboard from './gusto_onboard.jsx';
import GustoChat from './gusto_chat.jsx';
import GustoIntegrations from './gusto_integrations.jsx';

import AuditfileDashboard from './auditfile_dashboard.jsx';
import AuditfileTrialbalance from './auditfile_trialbalance.jsx';
import AuditfileSections from './auditfile_sections.jsx';
import AuditfileMapping from './auditfile_mapping.jsx';

import FreelanceBoxWorks from './freelance_box_works.jsx';
import FreelanceBoxHackathon from './freelance_box_hackathon.jsx';
import FreelanceJungle from './freelance_jungle.jsx';
import FreelanceDinobi from './freelance_dinobi.jsx';

import './styles.scss';

class Projects extends React.Component {
  renderGusto() {
    return (
      <Fade top>
        <div className='panel-group'>
          <Panel panelName='gusto' />
          <GustoGuide />
          <GustoChat />
          <GustoOnboard />
          <GustoIntegrations />
        </div>
      </Fade>
    )
  }

  renderAuditfile() {
    return (
      <Fade top delay={ 200 }>
        <div className='panel-group'>
          <Panel panelName='auditfile' />
          <AuditfileDashboard />
          <AuditfileSections />
          <AuditfileMapping />
          <AuditfileTrialbalance />
        </div>
      </Fade>
    )
  }

  renderFreelance() {
    return (
      <Fade top delay={ 400 }>
        <div className='panel-group'>
          <Panel panelName='freelance' />
          <FreelanceBoxHackathon />
          <FreelanceBoxWorks />
          <FreelanceJungle />
          <FreelanceDinobi />
        </div>
      </Fade>
    )
  }

  render() {
    return (
      <Section idName='projects'>
        <div className='projects-area'>
          <Number idNumber={ 4 } className='projects-area-number' />
          <ContentBlock title="a few things i've done" className='projects-area-block'/>
        </div>
        <div className='panel-wrapper'>{ this.renderGusto() }</div>
        <div className='panel-wrapper'>{ this.renderAuditfile() }</div>
        <div className='panel-wrapper'>{ this.renderFreelance() }</div>
      </Section>
    );
  }
}

export default Projects
