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
