import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/modules/sections';

import styles from './section.scss';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';

// Mobile Detect
import mobileDetect from 'mobile-detect';
const md = new mobileDetect(window.navigator.userAgent);

export default class Section extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    title: React.PropTypes.string,
    background: React.PropTypes.string,
    backgroundImage: React.PropTypes.string,
    backgroundBlur: React.PropTypes.number,
    backgroundOverlay: React.PropTypes.bool,
    parallax: React.PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.handleParallax = this.handleParallax.bind(this);
  }

  componentWillMount() {
    // Disable Parallax in mobile
    this.handleParallax();

    // Window Resize Listener
    window.addEventListener('resize', this.handleParallax);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleParallax);
  }

  getSafetyTitle(title) {
    return {
      __html: title
    };
  }

  handleParallax() {
    // Disable parallax under bp(mobile)
    if (window.innerWidth <= 640 || md.mobile()) {
      this.props.disableParallax();
    } else {
      this.props.enableParallax();
    }
  }

  render() {
    const inlineStyles = {};
    let sectionContainer = '';
    let sectionTitle = '';
    let sectionBackground = '';
    let backgroundOverlay = '';
    const sectionBackgroundImage = {};
    const parallaxEffect = this.props.sections.parallax;

    // Section Title
    if (this.props.title) {
      sectionTitle = <h2 styleName="section-title" dangerouslySetInnerHTML={this.getSafetyTitle(this.props.title)}></h2>;
    }

    // Default Container
    const defaultSectionContainer = (
      <div styleName="section-container">
        <div styleName="section-inner">
          {sectionTitle}
          {this.props.children}
        </div>
      </div>
    );

    // Background Color
    if (this.props.background) {
      sectionBackground = this.props.background;
    }

    if (this.props.backgroundOverlay) {
      backgroundOverlay = <div styleName="section-background-overlay"></div>;
    }

    // Parallax & Background Image
    if (this.props.parallax && parallaxEffect && this.props.backgroundImage) {
      inlineStyles.backgroundImage = '';
      // Parallax Container
      sectionContainer = (
        <Parallax
          strength={400}
          bgImage={this.props.backgroundImage}
          blur={this.props.backgroundBlur || 0}
          className={styles['section-background']}
          disabled={!parallaxEffect} >
          {backgroundOverlay}
          {defaultSectionContainer}
        </Parallax>
      );
    } else
    // Background Imge
    if (this.props.backgroundImage) {
      sectionBackgroundImage.backgroundImage = 'url(' + this.props.backgroundImage + ')';
      sectionContainer = (
        <div>
          <div
            styleName="section-background"
            style={sectionBackgroundImage} />
          {backgroundOverlay}
          {defaultSectionContainer}
        </div>
      );
      // inlineStyles.
    } else { // Nothing
      sectionContainer = defaultSectionContainer;
    }

    return (
      <Element
        name={this.props.name}
        styleName={classNames('section', sectionBackground)} >
        {sectionContainer}
      </Element>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    sections: state.sections
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Section, styles, {
  allowMultiple: true
}));
