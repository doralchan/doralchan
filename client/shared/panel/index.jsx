import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Modal from '../modal/index.jsx';
import Button from '../button/index.jsx';

import './styles.scss';

class Panel extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    panelType: PropTypes.oneOf(['name','item']),
    panelName: PropTypes.string,
    panelProject: PropTypes.string,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

  }

  closeModal() {
    document.body.classList.remove('overflow-hidden'),
    this.setState({
      isModalOpen: false
    })
  }

  openModal() {
    document.body.classList.add('overflow-hidden'),
    this.setState({
      isModalOpen: true
    })
  }

  panelClasses() {
    const panelClass = this.props.panelName ? 'name' : 'item';

    return classNames(
      'panel',
      `panel-${ panelClass }`,
      this.props.className
    );
  }

  render() {
    const panelName = <h5>{ this.props.panelName }</h5>
    const panelProject = <div>{ this.props.panelProject }</div>

    return (
      <div className={ this.panelClasses() }>
        <div onClick={this.openModal} className='panel-content'>
          { this.props.panelName ? panelName : null }
          { this.props.panelProject ? panelProject : null }
        </div>
        <Modal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}>
          { this.props.children }
          <div className='btn btn-primary' onClick={this.closeModal}>Close</div>
        </Modal>
      </div>
    );
  }

}

export default Panel
