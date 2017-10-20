import React from 'react';
import { Fade } from 'react-reveal';

import Panel from '../../shared/panel/index.jsx';

import './styles.scss';

class Auditfile extends React.Component {
  render() {
    return (
      <Fade top delay={ 100 }>
        <div className='panel-group'>
          <Panel panelName='auditfile'>
            TBD
          </Panel>
          <Panel panelProject='design guide'>
            TBD
          </Panel>
          <Panel panelProject='design guide'>
            TBD
          </Panel>
          <Panel panelProject='design guide'>
            TBD
          </Panel>
          <Panel panelProject='design guide'>
            TBD
          </Panel>
        </div>
      </Fade>
    );
  }
}

export default Auditfile
