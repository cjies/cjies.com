import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Portal from 'shared/Portal';
import Button from 'shared/Button';

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
  position: relative;
  width: 90%;
  height: auto;
  max-width: 580px;
  max-height: 90%;
  padding: 20px;
  background-color: #fff;
  text-align: left;
  user-select: auto;
  overflow: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0s ease-out, opacity 0s ease-out;

  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
`;

const ModalDesc = styled.div`
  display: flex;
  align-items: center;
`;

const DescText = styled.div`
  flex: 1;

  h1 {
    margin-bottom: 5px;
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

  ${({ isOpen }) =>
    isOpen &&
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

class PortfolioModal extends Component {
  static defaultProps = {
    isOpen: false,
    modalBackdropX: undefined,
    modalBackdropY: undefined,
    title: '',
    description: '',
    type: '',
    link: '',
    detailImages: [],
    onClose: () => {},
  };

  render() {
    const {
      isOpen,
      modalBackdropX,
      modalBackdropY,
      title,
      description,
      type,
      link,
      detailImages,
      onClose,
    } = this.props;

    return (
      <Portal>
        <ModalWrapper isOpen={isOpen}>
          <ModalBackdrop
            onClick={onClose}
            style={{ left: modalBackdropX, top: modalBackdropY }}
          />
          <ModalCloseButton onClick={onClose}>
            <i className="fa fa-close fa-2x" />
          </ModalCloseButton>
          <ModalContainer>
            <ModalDesc>
              <DescText>
                <h1>{title}</h1>
                <p>{description}</p>
              </DescText>
              {!!link && (
                <Button as="a" href={link} target="_blank">
                  Visit
                </Button>
              )}
            </ModalDesc>
          </ModalContainer>
        </ModalWrapper>
      </Portal>
    );
  }
}

export default PortfolioModal;
