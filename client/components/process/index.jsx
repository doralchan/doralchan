import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';
import Number from '../../shared/number/index.jsx';

import './styles.scss';

class QuoteBlock extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <div className='quote-block'>
        <h1 className='quote-block-header' />
        <div className='quote-block-description'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

class Process extends React.Component {
  render() {
    return (
      <Section idName='process'>
        <div className='process-number'>
          <Number idNumber={ 3 } />
        </div>
        <div className='process-area'>
          <ContentBlock title='how i work'>
            This is how I work.
          </ContentBlock>
          <div className='quotes'>
            <QuoteBlock>TBD quote</QuoteBlock>
            <QuoteBlock>TBD quote</QuoteBlock>
          </div>
        </div>
      </Section>
    );
  }
}

export default Process
