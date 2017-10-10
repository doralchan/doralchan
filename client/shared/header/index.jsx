import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Navigation from '../../shared/navigation/index.jsx';

import './styles.scss';

class Header extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  headerClasses() {
    return classNames(
      'header',
      this.props.className
    )
  };

  render() {
    return (
      <header className={ this.headerClasses() }>
        <Navigation />
      </header>
    );
  }
}

export default Header
