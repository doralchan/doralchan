import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Number extends React.Component {
  static propTypes = {
    idNumber: PropTypes.number.isRequired,
    color: PropTypes.oneOf(['light', 'dark']),
    className: PropTypes.string
  };

  static defaultProps = {
    color: 'light'
  };

  renderNumberClasses() {
    return classNames(
      'id-number',
      `id-number-${ this.props.color }`,
      this.props.className
    )
  }

  render() {
    return (
      <div className={ this.renderNumberClasses() }>
        0{ this.props.idNumber }
      </div>
    )
  }

}

export default Number
