import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components/common/card';
import Button from 'components/common/button';
import Input from 'components/common/input';
import {
  ModalContainer,
  ModalBox,
  ModalTitleContainer,
  ModalTitle,
  ModalActions,
  PseudoContainer,
  ModalBody
} from './elements';

class ConfirmModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ''
    };
  }

  componentDidMount = () => {
    const { body } = document;
    body.style.overflow = 'hidden';
  };

  componentWillUnmount = () => {
    const { body } = document;
    body.style.overflow = null;
  };

  handleInputChange = ({ target: { value } }) => this.setState({ textInput: value });

  render() {
    const { textInput } = this.state;
    const { confirm, cancel, message, title, textProof } = this.props;
    return (
      <ModalContainer>
        <ModalBox animate>
          <Card>
            <ModalTitleContainer>
              <ModalTitle>{title}</ModalTitle>
            </ModalTitleContainer>
            {(message || textProof.text) && (
              <ModalBody>
                {message}
                {textProof.text && (
                  <Input
                    value={textInput}
                    onChange={this.handleInputChange}
                    label={textProof.description || `Escribe '${textProof.text}' para confirmar`}
                  />
                )}
              </ModalBody>
            )}
            <ModalActions>
              <Button size="large" color="default" marginR="20" variant="outlined" onClick={cancel}>
                Cancelar
              </Button>
              <Button
                disabled={textProof.text && textInput !== textProof.text}
                size="large"
                color="gradient"
                onClick={confirm}
              >
                Confirmar
              </Button>
            </ModalActions>
          </Card>
        </ModalBox>
        <PseudoContainer onClick={cancel} />
      </ModalContainer>
    );
  }
}

ConfirmModal.defaultProps = {
  message: null,
  title: '¿Estás seguro?'
};

ConfirmModal.propTypes = {
  confirm: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  message: PropTypes.string,
  title: PropTypes.string,
  textProof: PropTypes.object.isRequired
};

export default ConfirmModal;
