import React from 'react';

class Home extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
   );
  }
}

export default Home
