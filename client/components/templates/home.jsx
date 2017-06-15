import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        Home
      </div>
    );
  }

  _navigateToPath = ({ target }) => {
    this.context.router.push({
      pathname: target.value
    });
  }
}

export default Home;
