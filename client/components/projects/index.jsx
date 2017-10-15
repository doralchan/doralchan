import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import PanelGroup from '../../shared/panel_group/index.jsx';
import Number from '../../shared/number/index.jsx';

import './styles.scss';

class Projects extends React.Component {
  renderGusto() {
    return (
      <PanelGroup>
        <PanelGroup.Item panelName='gusto' />
        <PanelGroup.Item panelLink='open'>
          Design Guide
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Onboarding
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Payroll Preview
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Chat
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Garnishments
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Previous Payrolls
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Dashboard
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          TBD
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          TBD
        </PanelGroup.Item>
      </PanelGroup>
    );
  }

  renderAuditFile() {
    return (
      <PanelGroup>
        <PanelGroup.Item panelName='auditfile' />
        <PanelGroup.Item panelLink='open'>
          TBD
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          TBD
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          TBD
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          TBD
        </PanelGroup.Item>
      </PanelGroup>
    );
  }

  renderFreelance() {
    return (
      <PanelGroup>
        <PanelGroup.Item panelName='freelance' />
        <PanelGroup.Item panelLink='open'>
          TBD
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          TBD
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          TBD
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          TBD
        </PanelGroup.Item>
      </PanelGroup>
    );
  }

  render() {
    return (
      <Section idName='projects'>
        <div className='projects-area'>
          <Number idNumber={ 4 } className='projects-area-number' />
          <ContentBlock title="a few things i've done" className='projects-area-block'/>
        </div>
        <div className='panel-wrapper'>
          { this.renderGusto() }
          { this.renderAuditFile() }
          { this.renderFreelance() }
        </div>
      </Section>
    );
  }
}

export default Projects
