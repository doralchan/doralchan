import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class ContentBlock extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    className: PropTypes.string
  };

  contentBlockClasses() {
    return classNames(
      'content-block',
      this.props.className
    )
  };

  render() {
    return (
      <div className={ this.contentBlockClasses() }>
        <h5 className='content-block-title'>
          { this.props.title }
        </h5>
        <div className='content-block-subtitle'>
          { this.props.subtitle }
        </div>
        <div className='content-block-description'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default ContentBlock
