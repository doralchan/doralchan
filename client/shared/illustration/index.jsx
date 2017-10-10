import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Illustration extends React.Component {
  static propTypes = {
    imageLink: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  renderIlloClasses() {
    return classNames(
      'illo',
      this.props.className
    )
  }

  render() {
    return (
      <img
        src={ this.props.imageLink }
        className={ this.renderIlloClasses() }
      />
    )
  }

}

export default Illustration
