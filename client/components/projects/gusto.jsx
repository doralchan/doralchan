import React from 'react';
import Panel from '../../shared/panel/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import './styles.scss';

class Gusto extends React.Component {
  render() {
    return (
      <div className='panel-group'>
        <Panel panelName='gusto'>
          TBD
        </Panel>
        <Panel panelProject='design guide'>
          <Carousel>
            <div className='slide slide-1'>Slide 1</div>
            <div className='slide slide-2'>Slide 2</div>
            <div className='slide slide-3'>Slide 3</div>
            <div className='slide slide-4'>Slide 4</div>
            <div className='slide slide-5'>Slide 5</div>
          </Carousel>
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
