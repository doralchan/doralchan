import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import DashboardMain from '../../assets/images/auditfile/dashboard_main.png';
import DashboardList from '../../assets/images/auditfile/dashboard_list.png';

class AuditfileDashboard extends React.Component {
  renderIntro() {
    return (
      <Slide title='Dashboard'>
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
      <Panel panelProject='dashboard'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ DashboardMain } /></Slide>
          <Slide><Image imageLink={ DashboardList } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default AuditfileDashboard
