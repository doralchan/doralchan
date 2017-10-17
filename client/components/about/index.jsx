import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Number from '../../shared/number/index.jsx';

import '../../stylesheets/helpers.scss';
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
        <div className='about-number'>
          <Number idNumber={ 1 } />
        </div>
        <div className='about-area'>
          <ContentBlock title='a little bout me' className='content-area-description'>
            Hi. I'm Dora. First off, I want to be pretty straight forward about something -
            I'm a tinkerer. I wouldn't consider myself an expert in any one particular
            area.
            { this.renderBlobs() }
          </ContentBlock>
          <div className='experience'>
            <ContentBlock subtitle='~8 years of education' className='experience-block'>
              Education is never over but tuition? Thank
              I have a bachelors of arts from the University of California, Berkeley and
              a masters from the University of Michigan, Ann Arbor.
            </ContentBlock>
            <ContentBlock subtitle='~15 years of design experience' className='experience-block'>
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
