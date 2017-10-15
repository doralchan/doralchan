import React from 'react';

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
            User experiences and interactions are
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
            Understanding the fundamentals of front-end development has helped
            me get sense of of how things can come together. This skill has
            added another dimension of possibility in product design, enabling
            me to build rapid prototypes for testing.
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
            Description Insert
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
        <div className='skills-area'>
          { this.renderUX() }
          { this.renderFrontEnd() }
          { this.renderSystems() }
        </div>
      </Section>
    );
  }
}

export default Skills
