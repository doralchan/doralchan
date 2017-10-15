import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../shared/section/index.jsx';

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

class Quotes extends React.Component {
  render() {
    return (
      <Section idName='quotes'>
        <QuoteBlock>
          Something something something about design
        </QuoteBlock>
        <QuoteBlock>
          TBD quote
        </QuoteBlock>
      </Section>
    );
  }
}

export default Quotes
