import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import PanelGroup from '../../shared/panel_group/index.jsx';

import './styles.scss';

class Projects extends React.Component {
  renderGusto() {
    return (
      <PanelGroup>
        <PanelGroup.Item panelName='gusto' />
        <PanelGroup.Item panelLink='open'>
          Project Icon 1
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Project Icon 2
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Project Icon 3
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Project Icon 4
        </PanelGroup.Item>
      </PanelGroup>
    );
  }

  renderAuditFile() {
    return (
      <PanelGroup>
        <PanelGroup.Item panelName='auditfile' />
        <PanelGroup.Item panelLink='open'>
          Project Icon 1
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Project Icon 2
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Project Icon 3
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Project Icon 4
        </PanelGroup.Item>
      </PanelGroup>
    );
  }

  renderFreelance() {
    return (
      <PanelGroup>
        <PanelGroup.Item panelName='freelance' />
        <PanelGroup.Item panelLink='open'>
          Project Icon 1
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Project Icon 2
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Project Icon 3
        </PanelGroup.Item>
        <PanelGroup.Item panelLink='open'>
          Project Icon 4
        </PanelGroup.Item>
      </PanelGroup>
    );
  }

  render() {
    return (
      <Section idName='projects'>
        <ContentBlock title="a few things i've done" />
        { this.renderGusto() }
        { this.renderAuditFile() }
        { this.renderFreelance() }
      </Section>
    );
  }
}

export default Projects
