import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class ContentBlock extends React.Component {
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
        <h4 className='content-block-title'>
          { this.props.title }
        </h4>
        <div className='content-block-description'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default ContentBlock
