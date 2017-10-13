import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import PanelGroup from '../../shared/panel_group/index.jsx';

import './styles.scss';

class Projects extends React.Component {
  render() {
    return (
      <Section idName='projects'>
        <ContentBlock title="a few things i've done">
          TBD
        </ContentBlock>
        <PanelGroup>
          <PanelGroup.Item panelName='Title' />
          <PanelGroup.Item>
            Project Icon 1
          </PanelGroup.Item>
          <PanelGroup.Item>
            Project Icon 2
          </PanelGroup.Item>
          <PanelGroup.Item>
            Project Icon 3
          </PanelGroup.Item>
          <PanelGroup.Item>
            Project Icon 4
          </PanelGroup.Item>
        </PanelGroup>
      </Section>
    );
  }
}

export default Projects
