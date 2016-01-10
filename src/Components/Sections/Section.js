import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './section.scss';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';

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
  }

  getSafetyTitle(title) {
    return {
      __html: title
    };
  }

  render() {
    const inlineStyles = {};
    let sectionContainer = '';
    let sectionTitle = '';
    let sectionBackground = '';
    let backgroundOverlay = '';
    const sectionBackgroundImage = {};

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
    if (this.props.parallax && this.props.backgroundImage) {
      inlineStyles.backgroundImage = '';
      // Parallax Container
      sectionContainer = (
        <Parallax
          strength={400}
          bgImage={this.props.backgroundImage}
          blur={this.props.backgroundBlur || 0}
          className={styles['section-background']}>
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

export default CSSModules(Section, styles, {
  allowMultiple: true
});
