import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Number from '../../shared/number/index.jsx';

import IconTriangle from '../../assets/icons/icon-triangle.svg';

import './styles.scss';

class Projects extends React.Component {
  renderGusto() {
    return (
      <div className='panel-group'>
        <Panel panelName='gusto' />
        <Panel panelProject='design guide'>
          TBD
        </Panel>
        <Panel panelProject='onboarding'>
          TBD
        </Panel>
        <Panel panelProject='chat'>
          TBD
        </Panel>
        <Panel panelProject='garnishments'>
          TBD
        </Panel>
      </div>
    );
  }

  renderAuditFile() {
    return (
      <div className='panel-group'>
        <Panel panelName='auditfile' />
        <Panel panelProject='design guide'>
          TBD
        </Panel>
        <Panel panelProject='design guide'>
          TBD
        </Panel>
        <Panel panelProject='design guide'>
          TBD
        </Panel>
        <Panel panelProject='design guide'>
          TBD
        </Panel>
      </div>
    );
  }

  renderFreelance() {
    return (
      <div className='panel-group'>
        <Panel panelName='freelance' />
        <Panel panelProject='design guide'>
          TBD
        </Panel>
        <Panel panelProject='design guide'>
          TBD
        </Panel>
        <Panel panelProject='design guide'>
          TBD
        </Panel>
        <Panel panelProject='design guide'>
          TBD
        </Panel>
      </div>
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
