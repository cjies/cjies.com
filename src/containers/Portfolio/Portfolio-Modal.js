import React from 'react';
import classNames from 'classnames/bind';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'reducers/modules/portfolio';

import styles from './portfolio-modal.scss';
const cx = classNames.bind(styles);

import { Button } from 'components';
import { lory } from 'lory.js';

let portfolioSlider = null;

class PortfolioModal extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.props.hideModal();
    document.body.style.overflow = '';
    // Destroy previous slider
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
        classNameSlideContainer: styles.slides,
        classNamePrevCtrl: styles.prev,
        classNameNextCtrl: styles.next
      });
    }, 100);
  }

  render() {
    // Portfolio Modal Style
    const { backdropStartX, backdropStartY, modalShow, modalData } = this.props.portfolio;
    const modalBackdropStyle = {
      left: backdropStartX,
      top: backdropStartY,
      backgroundColor: modalData.modalBackdropColor
    };
    return (
      <div>

        <div
          className={cx('portfolio-modal-backdrop', { active: modalShow })}
          onClick={this.hideModal}
          style={modalBackdropStyle} />

        <a
          className={cx('portfolio-modal-close', { active: modalShow })}
          onClick={this.hideModal}>
          <i className="fa fa-close fa-2x" />
        </a>

        <div className={styles['portfolio-modal-wrapper']}>
          <div className={cx('portfolio-modal', { active: modalShow })}>

            {(() => {
              // Lory Slider
              if (Object.keys(modalData).length) {
                // length > 1
                if (modalData.image.details.length > 1) {
                  this.initialSlider();
                  return (
                    <div id="portfolio-slider" className={cx('slider', 'portfolio-modal-slider')}>
                      <div className={styles.frame}>
                        <ul className={styles.slides}>
                          {modalData.image.details.map((item, i) => (
                            <li key={i}>
                              <img
                                role="presentation"
                                src={require(`../../../static/${item}`)} />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className={styles.prev}>
                        <i className="fa fa-angle-left fa-2x" />
                      </span>
                      <span className={styles.next}>
                        <i className="fa fa-angle-right fa-2x" />
                      </span>
                    </div>
                  );
                }
                // length == 1
                if (modalData.image.details.length === 1) {
                  return (
                    <div id="portfolio-slider" className={cx('slider', 'portfolio-modal-slider')}>
                      <img
                        role="presentation"
                        src={require(`../../../static/${modalData.image.details[0]}`)} />
                    </div>
                  );
                }
              }
              return null;
            })()}

            <div className={styles['portfolio-modal-desc']}>
              <div className={styles['portfolio-modal-text']}>
                <h1>
                  {modalData.title}
                </h1>
                <p>{modalData.type} | {modalData.description}</p>
              </div>

              {(() => {
                // Button Link
                if (Object.keys(modalData).length) {
                  if (modalData.link) {
                    return (
                      <div className={styles['portfolio-modal-link']}>
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
                return null;
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
)(PortfolioModal);
