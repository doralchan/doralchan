import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Section extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
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

  sectionContentClasses() {
    return classNames(
      'section-content',
      `section-content-${ this.props.idName }`
    );
  }

  render() {
    return (
      <section id={ this.props.idName } className={ this.sectionClasses() }>
        <div className={ this.sectionContentClasses() }>{ this.props.children }</div>
      </section>
    );
  }
}

export default Section
