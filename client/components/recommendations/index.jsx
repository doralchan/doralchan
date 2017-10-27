import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../shared/section/index.jsx';
import ContentBlock from '../../shared/content_block/index.jsx';

import './styles.scss';

class Link extends React.Component {
  static propTypes = {
    linkTo: PropTypes.node.isRequired,
    topic: PropTypes.string
  }

  render() {
    return (
      <a
        href={ this.props.linkTo }
        className='recommendation-column-link'
        target='_blank'>
        { this.props.topic }
      </a>
    )
  }
}

class Recommendations extends React.Component {
  render() {
    return (
      <Section idName='recommendations'>
        <ContentBlock subtitle='local recommendations'>
          <div className='recommendation-column'>
            <Link linkTo='https://www.mythpodcast.com/' topic='Snarky Podcast' />
            <Link linkTo='https://www.roalddahl.com/' topic='Childhood Fave' />
            <Link linkTo='http://www.amc.com/shows/halt-and-catch-fire' topic='Alternative Show' />
            <Link linkTo='https://www.parks.ca.gov/?page_id=453' topic='Mushroom Hunting' />
            <Link linkTo='http://www.andytownsf.com/' topic='Snowy Plover' />
          </div>
          <div className='recommendation-column'>
            <Link linkTo='https://touchstoneclimbing.com/mission-cliffs/' topic='Climbing Gym' />
            <Link linkTo='https://www.parks.ca.gov/?page_id=538' topic='Bouldering Park' />
            <Link linkTo='http://www.floragrubb.com/' topic='Succulent Obsession' />
            <Link linkTo='https://drafthouse.com/sf' topic='Quirky Theater' />
            <Link linkTo='http://riograndegames.com/Game/5-Power-Grid' topic='Geeky Board Game' />
          </div>
          <div className='recommendation-column'>
            <Link linkTo='https://izaramen.com/' topic='Tonkatsu Ramen' />
            <Link linkTo='https://www.philzcoffee.com/' topic='Iced Coffee' />
            <Link linkTo='http://www.deliboardsf.com/' topic='Hot Sandwich' />
            <Link linkTo='https://www.yelp.com/biz/taqueria-vallarta-san-francisco' topic='Cheap Tacos' />
            <Link linkTo='https://saltandstraw.com/' topic='Fancy Ice Cream' />
          </div>
          <div className='recommendation-column'>
            <Link linkTo='http://www.popsons.com/' topic='Perfect Burger' />
            <Link linkTo='https://www.souvlasf.com/' topic='Simple Fries' />
            <Link linkTo='http://vivelatarte.com/' topic='Pretty Baked Things' />
            <Link linkTo='http://www.berkeleybowl.com/' topic='Groceries' />
            <Link linkTo='https://www.cozymeal.com/' topic='Cooking Class' />
          </div>
          <div className='recommendation-column'>
            <Link linkTo='https://blackhammerbrewing.com/' topic='Happy Hour' />
            <Link linkTo='https://www.meetup.com/cascadesf/' topic='Designer Hour' />
            <Link linkTo='http://www.bluestardonuts.com/' topic='Doughnuts' />
            <Link linkTo='http://saapver.com/' topic='Pork Belly Fried Rice' />
            <Link linkTo='http://shopattherapy.com/' topic='Useless Trinkets' />
          </div>
        </ContentBlock>
      </Section>
    );
  }
}

export default Recommendations
