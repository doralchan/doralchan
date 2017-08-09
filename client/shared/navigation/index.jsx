import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router';

import IconMenu from '../../assets/icons/icon-menu.svg';

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
    const activeClass = this.state.openMenu ? 'nav-menu-open' : 'nav-menu-close';

    return classNames(
      'nav-menu',
      `${ activeClass}`,
      this.props.className
    )
  }

  menuList() {
    return (
      <div className={ this.menuClasses() }>
        <Link to='/'>Home</Link>
        <Link to='/toolkit'>Toolkit</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/processes'>Processes</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    )
  }

  render() {
    return (
      <div className='nav' onClick={ this.toggleMenu }>
        <a href='#' className='nav-link'>
          <img src={ IconMenu } className='nav-link-icon'/>
        </a>
        { this.menuList() }
      </div>
    )
  }

}

export default Navigation
