import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Card from '../../shared/card/index.jsx';

class Skills extends React.Component {
  renderUX () {
    return (
      <Card>
        <ContentBlock title='user experience'>
          Description Insert
        </ContentBlock>
      </Card>
    );
  }

  renderFrontEnd () {
    return (
      <Card>
        <ContentBlock title='front-end'>
          Description Insert
        </ContentBlock>
      </Card>
    );
  }

  renderSystems () {
    return (
      <Card>
        <ContentBlock title='systems'>
          Description Insert
        </ContentBlock>
      </Card>
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
