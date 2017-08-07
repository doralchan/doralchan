import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    idName: PropTypes.string
  };

  containerClasses() {
    return classNames(
      'container',
      this.props.className
    );
  }

  render() {
    return(
      <div id={ this.props.idName } className={ this.containerClasses() }>
        { this.props.children }
      </div>
    );
  }
}

export default Container
