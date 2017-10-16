import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary'])
  };

  static defaultProps = {
    type: 'primary'
  }

  btnClasses() {
    return classNames(
      'btn',
      `btn-${ this.props.type }`,
      this.props.className
    )
  }

  render() {
    return (
      <button className={ this.btnClasses() }>
        { this.props.children }
      </button>
    );
  }
}

export default Button
