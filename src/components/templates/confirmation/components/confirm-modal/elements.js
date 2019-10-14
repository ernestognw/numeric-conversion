import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(-500px);
    opacity: 0.5;
  }

  to {
      transform: translateY(0);
      opacity: 1;
  }
`;

const animationIn = css`
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  position: fixed;
  touch-action: none;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
`;

const ModalBody = styled.pre`
  margin: 0;
  padding: 20px;
  font-size: 16px;
  font-family: ${props => props.theme.font.light};
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: normal;
`;

const PseudoContainer = styled.div`
  position: absolute;
  z-index: 3400;
  background: transparent;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const ModalBox = styled.div`
  margin: 48px;
  display: flex;
  position: relative;
  z-index: 3500;
  overflow-y: auto;
  flex-direction: column;
  flex: 0 1 auto;
  max-height: calc(100% - 96px);
  width: 100%;
  max-width: 400px;
  ${props => props.animate && animationIn};
`;

const ModalTitleContainer = styled.div`
  padding: 20px;
  padding-bottom: 0;
`;

const ModalTitle = styled.h6`
  color: ${props => props.theme.color.default};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.6;
  margin: 0;
`;

const ModalActions = styled.div`
  padding: 20px;
  flex: 0 0 auto;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export {
  ModalContainer,
  PseudoContainer,
  ModalBox,
  ModalBody,
  ModalTitleContainer,
  ModalTitle,
  ModalActions
};
