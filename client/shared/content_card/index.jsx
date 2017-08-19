import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class ContentCard extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
  };

  contentCardClasses() {
    return classNames() {
      'content-card',
      this.props.className
    }
  };

  render() {
    return(
      <div className={ this.contentCardClasses() }>
        <img src={ this.props.img } className='content-card-img' />
        <div className='content-card-title'>
          { this.props.title }
        </div>
        <div className='content-card-description'>
          { this.props.description }
        </div>
      </div>
    );
  }
}

export default ContentCard
