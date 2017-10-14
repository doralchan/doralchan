import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../shared/section/index.jsx';
import Button from '../../shared/button/index.jsx';

import './styles.scss';

class NavLink extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sectionLink: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  render() {
    return (
      <a href={ this.props.sectionLink } className='intro-nav-link'>
        <h1>{ this.props.children }</h1>
      </a>
    );
  }
}

class Intro extends React.Component {

  renderTitle() {
    return (
      <div className='intro-content-title'>
        <h1 className='content-title'>
          <div className='title'>user experience</div>
          <div className='title'>user interface</div>
          <div className='title'>front-end</div>
          <div className='title'>systems</div>
        </h1>
      </div>
    );
  }

  renderContent() {
    return (
      <div className='intro-content'>
        <h5 className='intro-content-subtitle'>dora chan</h5>
        { this.renderTitle() }
        <h1 className='intr-content-title'>designer</h1>
        <div className='intro-content-grid' />
      </div>
    );
  }

  renderNav() {
    return (
      <div className='intro-nav'>
        <div className='intro-nav-numbers'>
          <NavLink sectionLink='#about'>01</NavLink>
          <NavLink sectionLink='#skills'>02</NavLink>
          <NavLink sectionLink='#process'>03</NavLink>
          <NavLink sectionLink='#projects'>04</NavLink>
          <NavLink sectionLink='#contact'>05</NavLink>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Section idName='intro'>
        { this.renderContent() }
        { this.renderNav() }
      </Section>
    );
  }
}

export default Intro
