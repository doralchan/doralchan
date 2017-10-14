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
      <div>
        <Card>
          <Icon imageLink={ IconCircle } />
          <ContentBlock title='user experience'>
            Description Insert
          </ContentBlock>
        </Card>
        <List>
          <List.Item>
            <Icon imageLink={ IconCircle } size='small' /> User Research
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconCircle } size='small' /> User Testing
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconCircle } size='small' /> Wireframing
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconCircle } size='small' /> Interaction
          </List.Item>
        </List>
      </div>
    );
  }

  renderFrontEnd () {
    return (
      <div>
        <Card>
          <Icon imageLink={ IconTriangle } />
          <ContentBlock title='front-end'>
            Description Insert
          </ContentBlock>
        </Card>
        <List>
          <List.Item>
            <Icon imageLink={ IconTriangle } size='small' /> HTML
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconTriangle } size='small' /> CSS / SCSS
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconTriangle } size='small' /> JSX / CJSX
          </List.Item>
        </List>
      </div>
    );
  }

  renderSystems () {
    return (
      <div>
        <Card>
          <Icon imageLink={ IconSquare } />
          <ContentBlock title='systems'>
            Description Insert
          </ContentBlock>
        </Card>
        <List>
          <List.Item>
            <Icon imageLink={ IconSquare } size='small' /> Identifying Patterns
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconSquare } size='small' /> Abstracting
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconSquare } size='small' /> Modeling
          </List.Item>
          <List.Item>
            <Icon imageLink={ IconSquare } size='small' /> Documentation
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
