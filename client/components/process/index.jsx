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
          Context is really key. Understanding the goals and underlying
          motivations are key to any project. To do so, questions are
          critical. 
        </ContentBlock>
        <div className='process-number'>
          <Number idNumber={ 3 } />
        </div>
      </Section>
    );
  }
}

export default Process
