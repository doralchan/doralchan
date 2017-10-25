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
          complex the engagement. Each engagement has three general phases of
          review - planning, program and completion. These do not have to be
          completed in order and can be worked on simultaneously. Within each
          phase are sections that require thorough review and approval.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          The goal was to provide a method for customers to access their
          most important engagements. Targeted, procedural goals were to get quick
          status updates, see recent activity, and navigate to each engagement
          for a deeper dive into each section. There are permissions considerations
          where specific CPAs are assigned to engagement teams. They cannnot see
          the details of other engagments, seeing that it might compromise client
          privacy.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          The average range of engagements our customers were conducting at any
          given time were 1-3. Since they were signing in on a daily basis,
          we knew a dashboard for status updates and recent activity was ideal.
          From there, they should be able to jump straight into the engagement.
          Each phase can have a status since they are worked on simultaneously.
          This then goes deeper into each section.
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
