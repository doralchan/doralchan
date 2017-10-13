import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';

import './styles.scss';

class About extends React.Component {
  renderBlobs() {
    return (
      <div className=''>
        <div></div>
        <div></div>
      </div>
    );
  }

  render() {
    return (
      <Section idName='about'>
        <ContentBlock title='a little bout me'>
          TBD
        </ContentBlock>
        <ContentBlock subtitle='~8 years of education'>
          I have a bachelors degree of arts and masters degree in
        </ContentBlock>
        <ContentBlock subtitle='~15 years of design experience'>
          TBD
        </ContentBlock>
      </Section>
    );
  }
}

export default About
