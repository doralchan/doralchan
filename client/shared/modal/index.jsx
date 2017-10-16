import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Modal extends React.Component {
  static propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
		closeModal: PropTypes.func.isRequired,
    className: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
    const wrapperClasses = this.props.isModalOpen ? 'modal-open' : 'modal-closed';

    return (
      <div className={ wrapperClasses }>
        <div className='modal-overlay' onClick={ this.props.closeModal } />
        <div className='modal-wrapper'>
          { this.props.children }
        </div>
      </div>
    )
  }

}

export default Modal
