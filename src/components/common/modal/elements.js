import styled, { keyframes, css } from 'styled-components';
import Button from 'components/common/button';

const getWidth = size => {
  switch (size) {
    case 'small':
      return '400px';
    case 'large':
      return '600px';
    default:
      return '500px';
  }
};

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
  z-index: ${props => (props.zIndex ? props.zIndex : '3000')};
  position: fixed;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
`;

const PseudoContainer = styled.div`
  position: absolute;
  z-index: 3100;
  background: transparent;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalBox = styled.div`
  margin: 48px;
  display: flex;
  background: #fff;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  z-index: 3200;
  flex-direction: column;
  flex: 0 1 auto;
  width: ${props => getWidth(props.size)};
  ${props => props.animate && animationIn};
`;

const ContentHeader = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${props => props.theme.grey.light};
  border-bottom: 1px solid ${props => props.theme.grey.veryLightGrey};
  border-radius: 8px 8px 0 0;
`;

const ContentBody = styled.div`
  padding: 20px;
  max-height: 600px;
  overflow-y: auto;
`;

const ContentFooter = styled.div`
  height: 70px;
  background: ${props => props.theme.grey.light};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
  border-top: 1px solid ${props => props.theme.grey.veryLightGrey};
  border-radius: 0 0 8px 8px;
`;

const ModalTitle = styled.h6`
  color: ${props => props.theme.color.default};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.6;
`;

const CloseButton = styled(Button)`
  margin: auto;
  right: 8px;
  color: ${props => props.theme.color.default};
  position: absolute;
  flex: 0 0 auto;
  color: rgba(0, 0, 0, 0.54);
  padding: 6px;
  overflow: visible;
  font-size: 1.2rem;
  text-align: center;
  background: transparent;

  ${props =>
    props.marginY &&
    `
    margin: 19px;
  `}

  &:hover {
    box-shadow: none;
  }
`;

const ModalActions = styled.div`
  display: flex;
`;

export {
  ModalContainer,
  PseudoContainer,
  ModalBox,
  ModalTitle,
  CloseButton,
  ModalActions,
  ContentHeader,
  ContentBody,
  ContentFooter
};
