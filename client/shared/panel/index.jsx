import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Panel extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  panelClasses() {
    return classNames(
      'panel',
      this.props.className
    )
  };

  render() {
    return(
      <div className={ this.panelClasses() }>
        { this.props.children }
      </div>
    );
  }
}

Panel.Background = class Panel extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  backgroundClasses() {
    return classNames(
      'panel-bg',
      this.props.className
    )
  }

  render() {
    return(
      <div className={ this.backgroundClasses() } />
    )
  }
}

export default Panel
