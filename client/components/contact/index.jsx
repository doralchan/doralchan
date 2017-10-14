import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';

import './styles.scss';

class Contact extends React.Component {
  render() {
    return (
      <Section idName='contact' idNumber={ 5 }>
        <ContentBlock title='contact me'>
          TBD
        </ContentBlock>
      </Section>
    );
  }
}

export default Contact
