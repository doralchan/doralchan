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

  renderIlloClasses() {
    return classNames(
      'illo-group',
      this.props.className
    )
  }

  render() {
    return(
      <div className={ this.renderIlloClasses() }>
        { this.props.children }
      </div>
    );
  }
}

export default Illustration
