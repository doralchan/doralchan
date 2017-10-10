import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-router';

import './styles.scss';

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary']),
    toLink: PropTypes.string
  };

  btnClasses() {
    return classNames(
      'btn',
      `btn-${ this.props.type }`,
      this.props.className
    )
  }

  render() {
    return (
      <Link to={ this.props.toLink } className={ this.btnClasses() }>
        { this.props.children }
      </Link>
    );
  }
}

export default Button
