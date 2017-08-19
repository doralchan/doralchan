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

export default Panel
