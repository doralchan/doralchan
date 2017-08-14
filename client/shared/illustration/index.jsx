import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';
import '../../stylesheets/animations.scss';

class Illustration extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  renderIlloGroupClasses() {
    return classNames(
      'illo-group',
      this.props.className
    )
  }

  render() {
    return(
      <div className={ this.renderIlloGroupClasses() }>
        { this.props.children }
      </div>
    );
  }
}

Illustration.Item = class Illutration extends React.Component {
  static propTypes = {
    imageLink: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf([
      'vehicle',
      'cloud',
      'plane',
      'bird'
    ])
  };

  renderIlloItemClasses() {
    return classNames(
      'illo-item',
      this.props.type,
      this.props.className
    )
  }

  render() {
    return (
      <img src={ this.props.imageLink } className={ this.renderIlloItemClasses() } />
    )
  }

}

export default Illustration
