import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import OnboardLanding from '../../assets/images/gusto/onboarding_landing.png';
import OnboardSignup from '../../assets/images/gusto/onboarding_signup.png';
import OnboardLogin from '../../assets/images/gusto/onboarding_login.png';
import OnboardBasics from '../../assets/images/gusto/onboarding_basics.png';
import OnboardLocations from '../../assets/images/gusto/onboarding_locations.png';
import OnboardRegistration from '../../assets/images/gusto/onboarding_registration.png';
import OnboardCompletion from '../../assets/images/gusto/onboarding_completion.png';
import OnboardDash from '../../assets/images/gusto/onboarding_dash.png';
import OnboardTourIntro from '../../assets/images/gusto/onboarding_tour_intro.png';
import OnboardTourPeople from '../../assets/images/gusto/onboarding_tour_people.png';
import OnboardPayroll from '../../assets/images/gusto/onboarding_payroll.png';
import OnboardSchedule from '../../assets/images/gusto/onboarding_schedule.png';
import OnboardDirectory from '../../assets/images/gusto/onboarding_directory.png';

class GustoOnboard extends React.Component {
  renderIntro() {
    return (
      <Slide title='Onboarding'>
        <Slide.Block subtitle='Project Context'>
          Gusto was originally ZenPayroll, a startup with an onboarding
          experience designed for those who were already sold on payroll. It
          had been years since this flow was touched. With the widening user
          base, it became a major strain to the funnel of customers coming in
          who simply wanted to browse the product.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          Introduce the brand while progressively demonstrating value and
          building trust. NBD. While this was the primary goal, I had a
          secondary goal of reducing the need for manual data entry.
          Integrations introduced an opportunity for automation, and increased
          probability of feature adoption.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          This was one of the larger projects I've had at Gusto. It required
          major collaboration with multiple internal teams, including growth,
          risk, engineering, and more. Onboarding required research on multiple
          fronts since it heavily touched entry points at the landing page,
          pricing, navigation, dashboard and promotional content. With the
          massive scope of this project, it was necessary to break it down by
          phases.
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
          <Slide><Image imageLink={ OnboardBasics } /></Slide>
          <Slide><Image imageLink={ OnboardLocations } /></Slide>
          <Slide><Image imageLink={ OnboardRegistration } /></Slide>
          <Slide><Image imageLink={ OnboardCompletion } /></Slide>
          <Slide><Image imageLink={ OnboardTourIntro } /></Slide>
          <Slide><Image imageLink={ OnboardTourPeople } /></Slide>
          <Slide><Image imageLink={ OnboardDash } /></Slide>
          <Slide><Image imageLink={ OnboardPayroll } /></Slide>
          <Slide><Image imageLink={ OnboardSchedule } /></Slide>
          <Slide><Image imageLink={ OnboardDirectory } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default GustoOnboard
