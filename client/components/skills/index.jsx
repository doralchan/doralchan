import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Card from '../../shared/card/index.jsx';
import List from '../../shared/list/index.jsx';
import Icon from '../../shared/icon/index.jsx';

import IconCircle from '../../assets/icons/icon-circle.svg';
import IconTriangle from '../../assets/icons/icon-triangle.svg';
import IconSquare from '../../assets/icons/icon-square.svg';

import './styles.scss';

class Skills extends React.Component {
  renderUX () {
    return (
      <div className='skills-card'>
        <Card className='skills-card-area'>
          <Icon imageLink={ IconCircle } size='large' />
          <ContentBlock title='user experience'>
            Description Insert
          </ContentBlock>
        </Card>
        <List className='skills-card-area'>
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
      <div className='skills-card'>
        <Card className='skills-card-area'>
          <Icon imageLink={ IconTriangle } size='large' />
          <ContentBlock title='front-end'>
            Description Insert
          </ContentBlock>
        </Card>
        <List className='skills-card-area'>
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
      <div className='skills-card'>
        <Card className='skills-card-area'>
          <Icon imageLink={ IconSquare } size='large'/>
          <ContentBlock title='systems'>
            Description Insert
          </ContentBlock>
        </Card>
        <List className='skills-card-area'>
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
        { this.renderUX() }
        { this.renderFrontEnd() }
        { this.renderSystems() }
      </Section>
    );
  }
}

export default Skills
