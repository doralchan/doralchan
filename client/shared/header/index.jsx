import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Header extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string
  };

  headerClasses() {
    return classNames(
      'header',
      this.props.className  
    )
  };

  render() {
    return(
      <div className={ this.headerClasses() }>
        <h2 className='header-title'>
          { this.props.title }
        </h2>
        <div className='header-content'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Header
