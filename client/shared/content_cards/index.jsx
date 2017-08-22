import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class ContentCards extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  cardGroupClasses() {
    return classNames(
      'content-card-group',
      this.props.className
    )
  };

  render() {
    return (
      <div className={ this.cardGroupClasses() }>
        { this.props.children }
      </div>
    )
  };
};

ContentCards.Item = class ContentCards extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
  };

  cardClasses() {
    return classNames(
      'content-card',
      this.props.className
    )
  };

  render() {
    return (
      <div className={ this.cardClasses() }>
        <img src={ this.props.img } className='content-card-img' />
        <div className='content-card-tag'>
          <div className='content-card-title'>
            { this.props.title }
          </div>
          <p className='content-card-description'>
            { this.props.children }
          </p>
        </div>
      </div>
    );
  };
}

export default ContentCards
