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
        <a href='#about' className='nav-menu-item'>About</a>
        <a href='#skills' className='nav-menu-item'>Skills</a>
        <a href='#process' className='nav-menu-item'>Process</a>
        <a href='#projects' className='nav-menu-item'>Projects</a>
        <a href='#contact' className='nav-menu-item'>Contact</a>
      </div>
    )
  }

  render() {
    return (
      <nav className={ this.menuClasses() } onClick={ this.toggleMenu }>
        <a href='#' className='nav-link'>
          <span className='nav-link-icon' />
        </a>
        { this.menuList() }
      </nav>
    )
  }

}

export default Navigation
