import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/modules/portfolio';

import styles from './portfolio-modal.scss';
import Button from '../button/Button';
import { lory } from 'lory.js';

let portfolioSlider = null;

class PortfolioModal extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  hideModal() {
    this.props.hideModal();
    document.body.style.overflow = '';
    // 砍掉之前的記錄
    if (portfolioSlider) {
      portfolioSlider.destroy();
    }
    portfolioSlider = null;
  }

  initialSlider() {
    setTimeout(() => {
      const slider = document.querySelector('#portfolio-slider');
      portfolioSlider = lory(slider, {
        infinite: 1,
        slidesToScroll: 1,
        enableMouseEvents: true,
        classNameFrame: styles.frame,
        classNameSlideContainer: styles.slides
      });
    });
  }

  render() {
    // Portfolio Modal Style
    const { backdropStartX, backdropStartY, modalShow, modalData } = this.props.portfolio;
    const modalBackdropStyle = {
      left: backdropStartX,
      top: backdropStartY,
      // backgroundColor: modalData.modalBackdropColor
    };
    return (
      <div>

        <div
          styleName={classNames('portfolio-modal-backdrop', { 'active': modalShow })}
          onClick={this.hideModal.bind(this)}
          style={modalBackdropStyle} />

        <a
          styleName={classNames('portfolio-modal-close', { 'active': modalShow })}
          onClick={this.hideModal.bind(this)}>
          <i className="fa fa-close fa-2x" />
        </a>

        <div styleName="portfolio-modal-wrapper">
          <div styleName={classNames('portfolio-modal', { 'active': modalShow })}>

            {(() => {
              // Lory Slider
              if (Object.keys(modalData).length) {
                if (modalData.image.details.length > 0) {
                  this.initialSlider();
                  return (
                    <div id="portfolio-slider" styleName="slider portfolio-modal-slider">
                        <div styleName="frame">
                            <ul styleName="slides">
                              {modalData.image.details.map((item, i) => (
                                <li key={i}>
                                  <img src={require('../../../static/' + item)} />
                                </li>
                              ))}
                            </ul>
                        </div>
                    </div>
                  );
                }
              }
            })()}

            <div styleName="portfolio-modal-desc">
              <div styleName="portfolio-modal-text">
                <h1>{modalData.title}</h1>
                <p>{modalData.description}</p>
              </div>

              {(() => {
                // Button Link
                if (Object.keys(modalData).length) {
                  if (modalData.link) {
                    return (
                      <div styleName="portfolio-modal-link">
                        <Button
                          tag="link"
                          href={modalData.link}
                          target="_blank"
                          type="ghost"
                          color="gray">
                          Visit
                        </Button>
                      </div>
                    );
                  }
                }
              })()}
            </div>

          </div>
        </div>


      </div>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    portfolio: state.portfolio
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(PortfolioModal, styles, {
  allowMultiple: true
}));
