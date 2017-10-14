import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';

import './styles.scss';

class About extends React.Component {
  renderBlobs() {
    return (
      <div className='blob-group'>
        <div className='blob blob-short' />
        <div className='blob blob-long' />
        <div className='blob blob-medium' />
        <div className='blob blob-short' />
      </div>
    );
  }

  render() {
    return (
      <Section idName='about' idNumber={ 1 }>
        <ContentBlock title='a little bout me'>
          I'm a product designer with an interest in complex problems.
        </ContentBlock>
        { this.renderBlobs() }
        <ContentBlock subtitle='~8 years of education'>
          I have a bachelors degree of arts and masters degree in
        </ContentBlock>
        <ContentBlock subtitle='~15 years of design experience'>
          For the past 15 years, I've
        </ContentBlock>
      </Section>
    );
  }
}

export default About
