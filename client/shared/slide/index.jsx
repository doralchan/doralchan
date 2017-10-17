import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    const title = <h2 className='slide-title'>{ this.props.title }</h2>

    return (
      <div className={ this.slideClasses() }>
        { this.props.title ? title : null }
        { this.props.children }
      </div>
    );
  }
}

Slide.ContentBlock = class Slide extends React.Component {
  static propTypes = {
    className: PropTypes.string
    
  }
}

export default Slide
