import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router';

import './styles.scss';

class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = { openMenu: false };
  }

  toggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu
    });
  }

  menuClasses() {
    const activeClass = this.state.openMenu ? 'nav-close' : 'nav-open';

    return classNames(
      'nav',
      `${ activeClass}`,
      this.props.className
    )
  }

  menuList() {
    return (
      <div className='nav-menu'>
        <Link to='/' className='nav-menu-item'>Home</Link>
        <Link to='/toolkit' className='nav-menu-item'>Toolkit</Link>
        <Link to='/projects' className='nav-menu-item'>Projects</Link>
        <Link to='/processes' className='nav-menu-item'>Processes</Link>
        <Link to='/contact' className='nav-menu-item'>Contact</Link>
      </div>
    )
  }

  render() {
    return (
      <div className={ this.menuClasses() } onClick={ this.toggleMenu }>
        { this.menuList() }
        <a href='#' className='nav-link'>
          <span className='nav-link-icon' />
        </a>
      </div>
    )
  }

}

export default Navigation
