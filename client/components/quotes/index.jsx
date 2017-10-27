import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';

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
        <Fade left>
          <QuoteBlock>
            If at first the idea is not absurd, then there is no hope for it. - Albert Einstein
          </QuoteBlock>
        </Fade>
        <Fade left delay={ 100 }>
          <QuoteBlock>
            Styles come and go. Good design is a language, not a style. – Massimo Vignelli
          </QuoteBlock>
        </Fade>
        <Fade left delay={ 200 }>
          <QuoteBlock>
            Talk is cheap. Show me the code. - Linus Torvalds
          </QuoteBlock>
        </Fade>
      </Section>
    );
  }
}

export default Quotes
