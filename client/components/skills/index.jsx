import React from 'react';

import { Fade } from 'react-reveal';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Card from '../../shared/card/index.jsx';
import List from '../../shared/list/index.jsx';
import Icon from '../../shared/icon/index.jsx';
import Number from '../../shared/number/index.jsx';

import IconCircle from '../../assets/icons/icon-circle.svg';
import IconTriangle from '../../assets/icons/icon-triangle.svg';
import IconSquare from '../../assets/icons/icon-square.svg';

import './styles.scss';

class Skills extends React.Component {
  renderUX () {
    return (
      <div className='skill'>
        <Card>
          <div className='content-icon'>
            <Icon imageLink={ IconCircle } size='large' />
          </div>
          <ContentBlock title='ux & ui'>
            The further I dive into user experience and interfaces, the more
            I recognize information architecture as the groundwork of design.
            Content is contained and delivered when applicable. Too much of it
            at once and it becomes indecipherable.
          </ContentBlock>
        </Card>
        <List>
          <List.Item>
            <Icon imageLink={ IconCircle } /> User Research
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconCircle } /> User Testing
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconCircle } /> Wireframing
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconCircle } /> Interaction
          </List.Item>
        </List>
      </div>
    );
  }

  renderFrontEnd () {
    return (
      <div className='skill'>
        <Card>
          <div className='content-icon'>
            <Icon imageLink={ IconTriangle } size='large' />
          </div>
          <ContentBlock title='front-end'>
            Front-end development helps me enhance design visions while
            stabilizing any kooky, undeveloped theories I might have.
            Understanding how things work is part of the process.
            Interactive prototypes help build the story of the user.
          </ContentBlock>
        </Card>
        <List>
          <List.Item>
            <Icon imageLink={ IconTriangle } /> HTML
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconTriangle } /> CSS / SCSS
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconTriangle } /> JSX / CJSX
          </List.Item>
        </List>
      </div>
    );
  }

  renderSystems () {
    return (
      <div className='skill'>
        <Card>
          <div className='content-icon'>
            <Icon imageLink={ IconSquare } size='large' />
          </div>
          <ContentBlock title='systems'>
            Systems enable efficiency and provide a platform for others to
            design off of. A good one helps maintain what works, discourages
            repeat failures, and remains flexible enough to respond to changing
            environments. It is a single source of truth.
          </ContentBlock>
        </Card>
        <List>
          <List.Item>
            <Icon imageLink={ IconSquare } /> Identifying Patterns
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconSquare } /> Abstracting
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconSquare } /> Modeling
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconSquare } /> Documentation
          </List.Item>
        </List>
      </div>
    );
  }

  render() {
    return (
      <Section idName='skills'>
        <div className='skills-number'>
          <Number idNumber={ 2 } />
        </div>
        <div className='skills-background' />
        <Fade top wave className='skills-area'>
          { this.renderUX() }
          { this.renderFrontEnd() }
          { this.renderSystems() }
        </Fade>
      </Section>
    );
  }
}

export default Skills
