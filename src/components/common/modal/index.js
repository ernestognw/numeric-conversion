import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import ModalPortal from 'components/templates/modal-portal';
import RoundClear from 'react-md-icon/dist/RoundClear';
import Button from 'components/common/button';
import Loader from 'components/common/loader';
import {
  ModalContainer,
  ModalBox,
  ModalTitle,
  CloseButton,
  ModalActions,
  PseudoContainer,
  ContentHeader,
  ContentBody,
  ContentFooter
} from './elements';

class Modal extends Component {
  componentDidUpdate = prevProps => {
    const { active } = this.props;
    const { body } = document;
    if (prevProps.active !== active) {
      if (active) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = null;
      }
    }
  };

  render() {
    const {
      children,
      title,
      active,
      closeButton,
      primaryAction,
      primaryVariant,
      primaryText,
      primaryColor,
      secondaryAction,
      secondaryVariant,
      secondaryText,
      secondaryColor,
      loading,
      size,
      zIndex
    } = this.props;
    return (
      <Fragment>
        {active && (
          <ModalPortal>
            <ModalContainer zIndex={zIndex}>
              <ModalBox size={size} animate={active}>
                {title ? (
                  <ContentHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <CloseButton onClick={closeButton}>
                      <RoundClear />
                    </CloseButton>
                  </ContentHeader>
                ) : (
                  <CloseButton marginY onClick={closeButton}>
                    <RoundClear />
                  </CloseButton>
                )}
                <ContentBody>{children}</ContentBody>
                {(secondaryAction || primaryAction) && (
                  <ContentFooter>
                    <ModalActions>
                      {loading ? (
                        <Loader />
                      ) : (
                        <Fragment>
                          {secondaryAction && (
                            <Button
                              variant={secondaryVariant}
                              color={secondaryColor}
                              onClick={secondaryAction}
                              marginR="10"
                            >
                              {secondaryText || 'Cancel'}
                            </Button>
                          )}
                          {primaryAction && (
                            <Button
                              variant={primaryVariant}
                              color={primaryColor}
                              onClick={primaryAction}
                            >
                              {primaryText || 'Confirm'}
                            </Button>
                          )}
                        </Fragment>
                      )}
                    </ModalActions>
                  </ContentFooter>
                )}
              </ModalBox>
              <PseudoContainer onClick={closeButton} />
            </ModalContainer>
          </ModalPortal>
        )}
      </Fragment>
    );
  }
}

Modal.defaultProps = {
  title: null,
  primaryAction: null,
  primaryVariant: null,
  primaryText: null,
  primaryColor: null,
  secondaryAction: null,
  secondaryVariant: null,
  secondaryText: null,
  secondaryColor: null,
  loading: null,
  size: null,
  zIndex: null
};

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  active: PropTypes.bool.isRequired,
  closeButton: PropTypes.func.isRequired,
  primaryAction: PropTypes.func,
  primaryVariant: PropTypes.string,
  primaryText: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryAction: PropTypes.func,
  secondaryVariant: PropTypes.string,
  secondaryText: PropTypes.string,
  secondaryColor: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.string,
  zIndex: PropTypes.string
};

export default Modal;
