import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import DashboardMain from '../../assets/images/auditfile/dashboard_main.png';
import DashboardList from '../../assets/images/auditfile/dashboard_list.png';
import DashboardEng from '../../assets/images/auditfile/dashboard_engagement.png';
import DashboardPlan from '../../assets/images/auditfile/dashboard_planning.png';

class AuditfileDashboard extends React.Component {
  renderIntro() {
    return (
      <Slide title='Dashboard'>
        <Slide.Block subtitle='Project Context'>
          Certified public accountants perform multiple engagements every year
          for clients. These could either be in the form of audits or reviews
          depending on the size of the client. The larger the client, the more
          complex the engagement.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          Provide a method to navigate to individual engagements per client,
          whether if active, pending, or inactive. Engagements are also privately
          assigned to CPAs within the firm, so their home is meant
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
          <Slide><Image imageLink={ DashboardEng } /></Slide>
          <Slide><Image imageLink={ DashboardPlan } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default AuditfileDashboard
