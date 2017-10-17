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
          If I had asked people what they wanted, they would have said faster horses. - Henry Ford
        </QuoteBlock>
        <QuoteBlock>
          Styles come and go. Good design is a language, not a style. – Massimo Vignelli
        </QuoteBlock>
      </Section>
    );
  }
}

export default Quotes
