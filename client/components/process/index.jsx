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
        <div className='quote-block-header' />
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
        <ContentBlock title='how i work'>
          TBD
        </ContentBlock>
        <QuoteBlock>TBD</QuoteBlock>
        <QuoteBlock>TBD</QuoteBlock>
      </Section>
    );
  }
}

export default Process
