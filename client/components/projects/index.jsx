import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Panel from '../../shared/panel/index.jsx';
import Number from '../../shared/number/index.jsx';

import Auditfile from './auditfile.jsx';
import Gusto from './gusto.jsx';
import Freelance from './freelance.jsx';

import './styles.scss';

class Projects extends React.Component {
  render() {
    return (
      <Section idName='projects'>
        <div className='projects-area'>
          <Number idNumber={ 4 } className='projects-area-number' />
          <ContentBlock title="a few things i've done" className='projects-area-block'/>
        </div>
        <div className='panel-wrapper'>
          <Gusto />
          <Auditfile />
          <Freelance />
        </div>
      </Section>
    );
  }
}

export default Projects
