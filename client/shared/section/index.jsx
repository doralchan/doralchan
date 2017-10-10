import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Section extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    idName: PropTypes.string
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
        { this.props.children }
      </section>
    );
  }
}

export default Section
