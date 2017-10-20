import React from 'react';
import { Fade } from 'react-reveal';

import Panel from '../../shared/panel/index.jsx';

import './styles.scss';

class Freelance extends React.Component {
  render() {
    return (
      <Fade top delay={ 200 }>
        <div className='panel-group'>
          <Panel panelName='freelance'>
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

export default Freelance
