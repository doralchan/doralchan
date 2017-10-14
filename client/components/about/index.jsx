import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Number from '../../shared/number/index.jsx';

import './styles.scss';

class About extends React.Component {
  renderBlobs() {
    return (
      <div className='blob-group'>
        <div className='blob blob-short margin-right-15px' />
        <div className='blob blob-long margin-right-15px' />
        <div className='blob blob-medium margin-right-15px' />
        <div className='blob blob-short' />
      </div>
    );
  }

  render() {
    return (
      <Section idName='about'>
        <div className='section-content-number'>
          <Number idNumber={ 1 } />
        </div>
        <div className='section-content-area'>
          <ContentBlock title='a little bout me' className='content-area-description'>
            I'm a product designer with an interest in solving complex problems.
            { this.renderBlobs() }
          </ContentBlock>
          <div className='content-area-experience'>
            <ContentBlock subtitle='~8 years of education'>
              I have a bachelors degree of arts from the University of California, Berkeley and
              a masters from the University of Michigan, Ann Arbor.
            </ContentBlock>
            <ContentBlock subtitle='~15 years of design experience'>
              I've had the fortunate luck of having experienced different fields of design,
              ranging everywhere from interactive design to city planning.
            </ContentBlock>
          </div>
        </div>
      </Section>
    );
  }
}

export default About
