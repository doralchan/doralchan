import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class ContentBlock extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    return(
      <div className='content-block'>
        <img src={ this.props.icon } className='content-block-icon' />
        <div className='content-block-title'>
          { this.props.title }
        </div>
      </div>
    );
  }
}

export default ContentBlock
