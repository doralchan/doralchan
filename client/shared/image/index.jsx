import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Image extends React.Component {
  static propTypes = {
    imageLink: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['interface', 'graphic', 'mapping']),
    className: PropTypes.string
  };

  static defaultProps = {
    type: 'interface'
  };

  renderImageClasses() {
    return classNames(
      'image',
      `image-${ this.props.type }`,
      this.props.className
    )
  }

  render() {
    return (
      <img
        src={ this.props.imageLink }
        className={ this.renderImageClasses() }
      />
    )
  }

}

export default Image
