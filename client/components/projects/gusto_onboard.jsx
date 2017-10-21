import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import OnboardLanding from '../../assets/images/gusto/onboarding_landing.png';
import OnboardSignup from '../../assets/images/gusto/onboarding_signup.png';
import OnboardLogin from '../../assets/images/gusto/onboarding_login.png';
import OnboardQuick from '../../assets/images/gusto/onboarding_quick.png';
import OnboardLocations from '../../assets/images/gusto/onboarding_locations.png';
import OnboardRegistration from '../../assets/images/gusto/onboarding_registration.png';
import OnboardTour from '../../assets/images/gusto/onboarding_tour.png';
import OnboardDash from '../../assets/images/gusto/onboarding_dash.png';

class GustoOnboard extends React.Component {
  renderIntro() {
    return (
      <Slide title='Onboarding'>
        <Slide.Block subtitle='Project Context'>
          TBD
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          TBD
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          TBD
        </Slide.Block>
      </Slide>
    );
  }

  render() {
    return (
      <Panel panelProject='onboarding'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ OnboardLanding } /></Slide>
          <Slide><Image imageLink={ OnboardSignup } /></Slide>
          <Slide><Image imageLink={ OnboardLogin } /></Slide>
          <Slide><Image imageLink={ OnboardQuick } /></Slide>
          <Slide><Image imageLink={ OnboardLocations } /></Slide>
          <Slide><Image imageLink={ OnboardRegistration } /></Slide>
          <Slide><Image imageLink={ OnboardTour } /></Slide>
          <Slide><Image imageLink={ OnboardDash } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default GustoOnboard
