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

  render() {
    return(
      <div className='header'>
        <h1 className='header-title'>
          { this.props.title }
        </h1>
        <div className='header-description'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Header
