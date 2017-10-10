import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Icon extends React.Component {
  static propTypes = {
    imageLink: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  renderIconClasses() {
    return classNames(
      'icon',
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
