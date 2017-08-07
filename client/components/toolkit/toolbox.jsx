import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

class Toolbox extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    toolbox: PropTypes.oneOf('research', 'design', 'code')
  };

  render() {
    return(
      <div className='toolbox'>
        <div className='toolbox-top' />
          { this.props.children }
        <div className='toolkit-bottom' />
      </div>
    );
  }
}

export default Toolbox
