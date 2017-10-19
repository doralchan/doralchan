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

  renderLinkedIn() {
    return (
      <span>
        <a href="https://www.linkedin.com/in/doralchan" target='blank' className='contact-area-link'>LinkedIn</a>
      </span>
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
            Hi. I'm Dora. First off, I want to let you know I wouldn't consider
            myself an expert in anything besides drinking coffee. What I am is an
            enthusiastic tinkerer with a good chunk of design experience. I experiment
            with kooky theories and obsessively commit to projects. I succeed. I fail.
            The point is, I learn, and learn quickly.
            { this.renderBlobs() }
          </ContentBlock>
          <div className='experience'>
            <ContentBlock subtitle='~8 years of education' className='experience-block'>
              Officially, I have a B.A from the University of California, Berkeley and an M.Arch
              from the University of Michigan, Ann Arbor. Unofficially, I learn via the internets.
            </ContentBlock>
            <ContentBlock subtitle='~15 years of design experience' className='experience-block'>
              I'm often in design-build roles, work ranging everywhere from parametric
              modeling to hackathons. See my curriculum vitae / resume via&nbsp;
              { this.renderLinkedIn() }.
            </ContentBlock>
          </div>
        </div>
      </Section>
    );
  }
}

export default About
