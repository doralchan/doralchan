import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import Trial1 from '../../assets/images/auditfile/trialbalance_1.png';
import Trial2 from '../../assets/images/auditfile/trialbalance_2.png';

class AuditfileTrialbalance extends React.Component {
  renderIntro() {
    return (
      <Slide title='Trial Balance'>
        <Slide.Block subtitle='Project Context'>
          Trial balance is one of the most common data sets that impact other
          areas of engagements. It helps generate leadsheets and presents a
          platform for auditors to review. This data set comes from the client
          and are exported from a number of third party sources. Due to the
          varying tools and terminology per client, column titles do not always
          match.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          We needed a method to import these spreadsheets and provide users with
          an opportunity to modify any unmatched columns. While we can automate
          with our best guesses, it may not always be accurate.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          First and foremost, we decided to create an uploader that would take in
          spreadsheets with multiple formats. At the time, they were manually
          changing their files and submitting data so this quickly became an
          urgent need. We would present standard industry column categories
          which we would then allow them to match by dropdown. It would
          reconfigure the data and direct it to the relevant section for further
          review. Any updates would override existing data. 
        </Slide.Block>
      </Slide>
    );
  }

  render() {
    return (
      <Panel panelProject='trial balance'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ Trial1 } /></Slide>
          <Slide><Image imageLink={ Trial2 } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default AuditfileTrialbalance
