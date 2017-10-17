import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../icon/index.jsx';
import IconRight from '../../assets/icons/icon-caret-right.svg';
import IconLeft from '../../assets/icons/icon-caret-left.svg';

import './styles.scss';

class Carousel extends React.Component {
  static propTypes = {
    children: PropTypes.array,
    play: PropTypes.bool,
    interval: PropTypes.number,
    showNav: PropTypes.bool,
    showPagination: PropTypes.bool,
    ratio: PropTypes.shape({width: PropTypes.number, height: PropTypes.number})
  };

  static defaultProps = {
    play: false,
    interval: 5000,
    showNav: true,
    showPagination: true
  };

  state = {
    activeIndex: 0,
    slidesHeight: null
  };

  componentDidMount() {
    if (this.props.play) {
      this.play();
    }

    if (this.props.ratio) {
      window.addEventListener('resize', this.calculateSlidesHeight);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.play && !nextProps.play) {
      this.stop();
    }

    if (this.props.children.length !== nextProps.children) {
      this.setState({activeItem: 0});
    }

    if (!this.props.ratio && nextProps.ratio) {
      window.addEventListener('resize', this.calculateSlidesHeight);
    }
  }

  componentWillUnmount() {
    if (this.props.play) {
      this.stop();
    }

    if (this.props.ratio) {
      window.removeEventListener('resize', this.calculateSlidesHeight);
    }
  }

  setCarouselRef = (node) => {
    this.carouselRef = node;
  };

  carouselRef = null;

  calculateSlidesHeight = () => {
    if (this.props.ratio && this.carouselRef) {
      const {
        ratio: {
          width,
          height
        }
      } = this.props;
      const carousel = this.carouselRef.getBoundingClientRect();
      const slidesHeight = carousel.width
        ? (carousel.width * height / width)
        : null;
      this.setState({slidesHeight});
    }
  };

  play = () => {
    this.interval = setInterval(this.next, this.props.interval);
  };

  stop = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  next = () => {
    const activeIndex = (this.state.activeIndex < this.props.children.length - 1)
      ? (this.state.activeIndex + 1)
      : 0;
    this.setState({activeIndex});
  };

  prev = () => {
    const activeIndex = (this.state.activeIndex > 0)
      ? (this.state.activeIndex - 1)
      : this.props.children.length - 1;
    this.setState({activeIndex});
  };

  goTo = (activeIndex) => {
    if (activeIndex >= 0 && activeIndex < this.props.children.length) {
      this.setState({activeIndex});
    }
  };

  renderNav() {
    return (
      <div className='carousel-nav'>
        <div className='carousel-nav-icon' onClick={this.prev}>
          <Icon imageLink={IconLeft} size='medium'/>
        </div>
        <div className='carousel-nav-icon' onClick={this.next}>
          <Icon imageLink={IconRight} size='medium'/>
        </div>
      </div>
    );
  }

  renderPagination() {
    const pages = Array.from(Array(this.props.children.length).keys());

    return (
      <div className='carousel-pagination'>
        {pages.map((page) => (<div key={page} className={`carousel-page ${page === this.state.activeIndex
          ? 'carousel-page-active'
          : ''}`} onClick={() => {
          this.goTo(page);
        }}/>))
}
      </div>
    );
  }

  render() {
    const {activeIndex, slidesHeight} = this.state;
    const {children, showNav, showPagination} = this.props;
    const slidesCount = children.length;

    const carouselSlidesStyles = {
      marginLeft: `${activeIndex * -100}%`,
      width: `${slidesCount * 100}%`
    };

    const carouselSlideStyles = {
      width: `${ 100 / slidesCount}%`
    };

    return (
      <div className='carousel' ref={this.setCarouselRef}>
        <div className='carousel-slides' style={carouselSlidesStyles}>
          {children.map((slide, key) => (
            <div key={key} className='carousel-slide' style={carouselSlideStyles}>
              {slide}
            </div>
          ))}
        </div>
        {showNav && slidesCount > 1
          ? this.renderNav()
          : null}
        {showPagination && slidesCount > 1
          ? this.renderPagination()
          : null}
      </div>
    );
  }
}

export default Carousel
