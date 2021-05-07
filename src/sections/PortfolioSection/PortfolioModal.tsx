import React from 'react';
import styled, { css } from 'styled-components';
import { lory } from 'lory.js';

import Portal from 'shared/Portal';
import Button from 'shared/Button';

import { PortfolioItemType } from 'data/portfolios';

const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  opacity: 0;
  user-select: none;
  pointer-events: none;
  background-color: rgba(245, 245, 245, 0.98);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: width 0.5s ease-out, height 0.5s ease-out,
    opacity 0.3s ease-out 0.2s;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  padding: 30px;
  pointer-events: none;

  /* Remove default button's styles */
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0;
  outline: 0;
  user-select: none;
  color: inherit;
  cursor: pointer;

  @media (max-width: 639px) {
    top: auto;
    right: auto;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`;

const ModalContainer = styled.div`
  width: 90%;
  height: auto;
  max-width: 580px;
  max-height: 90%;
  padding: 20px;
  background-color: #fff;
  user-select: auto;
  overflow: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0s ease-out, opacity 0s ease-out;

  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
`;

const IframeContainer = styled.div`
  margin-bottom: 10px;

  > iframe {
    width: 100%;
    border: none;
    background-color: #efefef;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  min-height: 250px;
  margin-bottom: 10px;
  background-color: #efefef;
  font-size: 0;
  user-select: none;

  img {
    width: 100%;
    height: auto;
    pointer-events: none;
  }

  /* lory contents */
  .js_frame {
    width: 100%;
    position: relative;
    line-height: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  .js_slides {
    display: inline-block;
    > li {
      position: relative;
      display: inline-block;
      width: 100%;
      cursor: move;
    }
  }

  .js_prev,
  .js_next {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    height: 100%;
    padding: 0 15px;
    cursor: pointer;

    color: #fff;
    font-size: 1rem;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  }
  .js_prev {
    left: 0;
  }
  .js_next {
    right: 0;
  }
`;

const DescContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DescText = styled.div`
  flex: 1;

  h1 {
    margin: 0 0 5px;
  }

  p {
    color: #8c8c8c;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 101;
  pointer-events: none;

  /* Centralized content */
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ open }: { open?: boolean }) =>
    open &&
    css`
      pointer-events: auto;

      ${ModalBackdrop} {
        opacity: 1;
        width: 400vw;
        height: 400vh;
        pointer-events: auto;
        transition: width 0.4s ease-in, height 0.4s ease-in,
          opacity 0.3s ease-in;
      }

      ${ModalCloseButton} {
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.3s ease-out 0.5s;
      }

      ${ModalContainer} {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
        transition-duration: 0.3s;
        transition-delay: 0.4s;
      }
    `};
`;

type PortfolioModalProps = {
  open?: boolean;
  portfolioItem: PortfolioItemType;
  modalBackdropX?: number;
  modalBackdropY?: number;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
};

class PortfolioModal extends React.PureComponent<PortfolioModalProps> {
  sliderRef = React.createRef<HTMLDivElement>();
  lorySlider: typeof lory | null = null;

  componentDidUpdate(prevProps: PortfolioModalProps) {
    // Initial lory slider
    if (
      this.sliderRef.current &&
      this.props.open &&
      !prevProps.open &&
      this.props.portfolioItem.detailImages &&
      this.props.portfolioItem.detailImages.length > 1
    ) {
      setTimeout(() => {
        if (!this.sliderRef.current) {
          return;
        }

        this.lorySlider = lory(this.sliderRef.current, {
          infinite: 1,
          slidesToScroll: 1,
          enableMouseEvents: true,
        });
      }, 100);
    }
  }

  componentWillUnmount() {
    if (this.lorySlider) {
      this.lorySlider.destroy();
    }
  }

  renderPresentationIframe() {
    const { iframe } = this.props.portfolioItem;

    if (!iframe) {
      return null;
    }

    return <IframeContainer dangerouslySetInnerHTML={{ __html: iframe }} />;
  }

  renderImageSlider() {
    const { detailImages } = this.props.portfolioItem;

    if (!detailImages || detailImages.length === 0) {
      return null;
    }

    if (detailImages.length === 1) {
      return (
        <SliderContainer>
          <img role="presentation" src={detailImages[0]} alt="slider" />
        </SliderContainer>
      );
    }

    return (
      <SliderContainer ref={this.sliderRef}>
        <div className="js_frame">
          <ul className="js_slides">
            {detailImages.map((image, index) => (
              <li key={`slider-${index}`}>
                <img role="presentation" src={image} alt={`slider-${index}`} />
              </li>
            ))}
          </ul>
          <span className="js_prev">
            <i className="fa fa-angle-left fa-2x" />
          </span>
          <span className="js_next">
            <i className="fa fa-angle-right fa-2x" />
          </span>
        </div>
      </SliderContainer>
    );
  }

  render() {
    const {
      open,
      portfolioItem,
      modalBackdropX,
      modalBackdropY,
      onClose,
    } = this.props;

    return (
      <Portal>
        <ModalWrapper open={open}>
          <ModalBackdrop
            onClick={onClose}
            style={{ left: modalBackdropX, top: modalBackdropY }}
          />
          <ModalCloseButton onClick={onClose}>
            <i className="fa fa-close fa-2x" />
          </ModalCloseButton>
          <ModalContainer>
            {portfolioItem.iframe
              ? this.renderPresentationIframe()
              : this.renderImageSlider()}

            <DescContainer>
              <DescText>
                <h1>{portfolioItem.title}</h1>
                <p>{portfolioItem.description}</p>
              </DescText>
              {!!portfolioItem.link && (
                <Button as="a" href={portfolioItem.link} target="_blank">
                  Visit
                </Button>
              )}
            </DescContainer>
          </ModalContainer>
        </ModalWrapper>
      </Portal>
    );
  }
}

export default PortfolioModal;
