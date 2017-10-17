import React from 'react';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Number from '../../shared/number/index.jsx';

import './styles.scss';

class Contact extends React.Component {
  renderLinkedIn() {
    return (
      <span>
        <a href="https://www.linkedin.com/in/doralchan" target='blank' className='contact-area-link'>LinkedIn</a>
      </span>
    );
  }

  renderTwitter() {
    return (
      <span>
        <a href="https://twitter.com/doralchan" target='blank' className='contact-area-link'>@doralchan</a>
      </span>
    );
  }

  render() {
    return (
      <Section idName='contact'>
        <div className='contact-area'>
          <ContentBlock title='contact me'>
            If you'd like to chat or ask me about anything above, feel free
            to contact me through { this.renderLinkedIn() } or DM me at my
            Twitter handle { this.renderTwitter() }.
          </ContentBlock>
        </div>
        <div className='contact-number'>
          <Number idNumber={ 5 } />
        </div>
      </Section>
    );
  }
}

export default Contact
