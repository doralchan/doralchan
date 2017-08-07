import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/global.scss';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App
