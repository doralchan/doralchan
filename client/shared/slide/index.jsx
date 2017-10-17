import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ContentBlock from '../content_block/index.jsx';

import './styles.scss';

class Slide extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    imageLink: PropTypes.string
  };

  slideClasses() {
    return classNames(
      'slide',
      this.props.title ? 'slide-intro' : 'slide-image',
      this.props.className
    );
  }

  render() {
    const title = <h3 className='slide-title'>{ this.props.title }</h3>

    return (
      <div className={ this.slideClasses() }>
        { this.props.title ? title : null }
        { this.props.children }
      </div>
    );
  }
}

Slide.Block = class Slide extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    subtitle: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    return (
      <ContentBlock className='slide-intro-block' subtitle={ this.props.subtitle }>
        { this.props.children }
      </ContentBlock>
    )
  }

}

export default Slide
