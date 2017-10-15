import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Number from '../../shared/number/index.jsx';

import './styles.scss';

class Process extends React.Component {
  render() {
    return (
      <Section idName='process'>
        <ContentBlock title='how i work' className='process-area'>
          Understanding the goals and underlying motivations to each project is
          a fundamental. To do so, questions need to be front-loaded to extract
          as much context as possible. The wrong questions can easily derail a
          project. I've found this to be the most pivotal step before any
        </ContentBlock>
        <div className='process-number'>
          <Number idNumber={ 3 } />
        </div>
      </Section>
    );
  }
}

export default Process
