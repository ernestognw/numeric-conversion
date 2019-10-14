import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import ConfirmModal from './components/confirm-modal';

const confirmation = (
  title,
  message,
  textProof = {
    text: '',
    description: ''
  }
) => {
  // Inside of component because if we put this out, ssr would crash,
  // due to inexistence of document at server
  const modalRoot = document.getElementById('modal');

  return new Promise(resolve => {
    const modalContainer = document.createElement('div');
    modalRoot.appendChild(modalContainer);

    const confirm = () => {
      resolve(true);
      ReactDOM.unmountComponentAtNode(modalContainer);
      modalRoot.removeChild(modalContainer);
    };

    const cancel = () => {
      resolve(false);
      ReactDOM.unmountComponentAtNode(modalContainer);
      modalRoot.removeChild(modalContainer);
    };

    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <ConfirmModal
          textProof={textProof}
          title={title}
          message={message}
          confirm={confirm}
          cancel={cancel}
        />
      </ThemeProvider>,
      modalContainer
    );
  });
};

export default confirmation;
