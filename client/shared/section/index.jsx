import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Section extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf([
      'top-left', 'top-center', 'top-right',
      'center-left', 'center-center', 'center-right',
      'bottom-left', 'bottom-center', 'bottom-right'
    ]),
    className: PropTypes.string,
    idName: PropTypes.string,
    idNumber: PropTypes.number
  };

  sectionClasses() {
    return classNames(
      'section',
      `section-${ this.props.idName }`,
      this.props.className
    );
  }

  numberClasses() {
    return classNames(
      'section-number',
      `section-number-${ this.props.position }`,
    );
  }

  render() {
    return (
      <section id={ this.props.idName } className={ this.sectionClasses() }>
        <div className='section-content'>{ this.props.children }</div>
        <h1 className='section-number'>{ this.props.idNumber }</h1>
      </section>
    );
  }
}

export default Section
