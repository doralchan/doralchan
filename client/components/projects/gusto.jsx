import React from 'react';
import Panel from '../../shared/panel/index.jsx';

import './styles.scss';

class Gusto extends React.Component {
  render() {
    return (
      <div className='panel-group'>
        <Panel panelName='gusto'>
          TBD
        </Panel>
        <Panel panelProject='design guide'>
          TBD
        </Panel>
        <Panel panelProject='onboarding'>
          TBD
        </Panel>
        <Panel panelProject='chat'>
          TBD
        </Panel>
        <Panel panelProject='garnishments'>
          TBD
        </Panel>
      </div>
    );
  }
}

export default Gusto
