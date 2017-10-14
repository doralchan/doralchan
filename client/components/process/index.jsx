import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';

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
      <Section idName='process' idNumber={ 3 }>
        <ContentBlock title='how i work'>
          This is how I work.
        </ContentBlock>
        <QuoteBlock>TBD quote</QuoteBlock>
        <QuoteBlock>TBD quote</QuoteBlock>
      </Section>
    );
  }
}

export default Process
