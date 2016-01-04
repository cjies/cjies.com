import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './section.scss';

export default class Section extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    title: React.PropTypes.string,
    background: React.PropTypes.string,
    center: React.PropTypes.bool
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
    // Background
    let sectionBackground = 'light';
    if (this.props.background) {
      sectionBackground = this.props.background;
    }

    // Section Title
    let sectionTitle = '';
    if (this.props.title) {
      sectionTitle = <h2 styleName="section-title" dangerouslySetInnerHTML={this.getSafetyTitle(this.props.title)}></h2>;
    }

    return (
      <section
        id={this.props.name}
        styleName={classNames('section', sectionBackground)}>
        <div styleName="section-container">
          <div styleName="section-inner">
            {sectionTitle}
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

export default CSSModules(Section, styles, {
  allowMultiple: true
});
