import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class ContentBlock extends React.Component {
  static propTypes = {
    children: PropTypes.node,
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

  renderTitle() {
    return (
      <h4 className='content-block-title'>
        { this.props.title }
      </h4>
    );
  }

  renderSubtitle() {
    return (
      <div className='content-block-subtitle'>
        { this.props.subtitle }
      </div>
    )
  }

  render() {
    const headerBlock = this.props.title ? this.renderTitle() : this.renderSubtitle();

    return (
      <div className={ this.contentBlockClasses() }>
        { headerBlock }
        <div className='content-block-description'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default ContentBlock
