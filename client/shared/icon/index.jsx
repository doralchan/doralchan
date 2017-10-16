import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Icon extends React.Component {
  static propTypes = {
    imageLink: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small']),
    className: PropTypes.string
  };

  static defaultProps = {
    size: 'small'
  };

  renderIconClasses() {
    return classNames(
      'icon',
      `icon-${ this.props.size }`,
      this.props.className
    )
  }

  render() {
    return (
      <img
        src={ this.props.imageLink }
        className={ this.renderIconClasses() }
      />
    )
  }

}

export default Icon
