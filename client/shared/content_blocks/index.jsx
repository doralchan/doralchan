import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class ContentBlocks extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  cardBlockClasses() {
    return classNames(
      'content-block-group',
      this.props.className
    )
  };

  render() {
    return (
      <div className={ this.cardBlockClasses() }>
        { this.props.children }
      </div>
    )
  };
}

ContentBlocks.Item = class ContentBlocks extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string
  };

  contentBlockClasses() {
    return classNames(
      'content-block',
      this.props.className
    )
  };

  render() {
    return(
      <div className={ this.contentBlockClasses() }>
        <h5 className='content-block-title'>
          { this.props.title }
        </h5>
        <div className='content-block-description'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default ContentBlocks
