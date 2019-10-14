import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${props => props.theme.fontSize.heading1};
  font-family: ${props => props.theme.font[props.font]};
  margin: 0;

  ${props =>
    props.font &&
    props.font !== 'light' &&
    props.font !== 'lightItalic' &&
    `
        letter-spacing: 0.5px;
      `};

  ${props => {
    switch (props.align) {
      case 'right':
        return 'text-align: right;';
      case 'left':
        return 'text-align: left;';
      case 'center':
        return 'text-align: center';
      default:
        return 'text-align: left;';
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.5rem;
  `};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && 'text-decoration: underline'};
  ${props => props.uppercase && 'text-transform: uppercase;'}
`;

const H2 = styled.h2`
  font-size: ${props => props.theme.fontSize.heading2};
  font-family: ${props => props.theme.font[props.font]};
  margin: 0;

  ${props =>
    props.font &&
    props.font !== 'light' &&
    props.font !== 'lightItalic' &&
    `
        letter-spacing: 0.5px;
      `};

  ${props => {
    switch (props.align) {
      case 'right':
        return 'text-align: right;';
      case 'left':
        return 'text-align: left;';
      case 'center':
        return 'text-align: center';
      default:
        return 'text-align: left;';
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.5rem;
  `};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && 'text-decoration: underline'};
  ${props => props.uppercase && 'text-transform: uppercase;'}
`;

const H3 = styled.h3`
  font-size: ${props => props.theme.fontSize.heading3};
  font-family: ${props => props.theme.font[props.font]};
  margin: 0;

  ${props =>
    props.font &&
    props.font !== 'light' &&
    props.font !== 'lightItalic' &&
    `
        letter-spacing: 0.5px;
      `};

  ${props => {
    switch (props.align) {
      case 'right':
        return 'text-align: right;';
      case 'left':
        return 'text-align: left;';
      case 'center':
        return 'text-align: center';
      default:
        return 'text-align: left;';
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
      margin-left: ${props.marginL}px;
    `};
  ${props =>
    props.marginR &&
    `
      margin-right: ${props.marginR}px;
    `};
  ${props =>
    props.marginB &&
    `
      margin-bottom: ${props.marginB}px;
    `};
  ${props =>
    props.gutterBottom &&
    `
      margin-bottom: 0.5rem;
    `};

  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && 'text-decoration: underline'};
  ${props => props.uppercase && 'text-transform: uppercase;'}
`;

const H4 = styled.h4`
  font-size: ${props => props.theme.fontSize.heading4};
  font-family: ${props => props.theme.font[props.font]};
  margin: 0;

  ${props =>
    props.font &&
    props.font !== 'light' &&
    props.font !== 'lightItalic' &&
    `
        letter-spacing: 0.5px;
      `};

  ${props => {
    switch (props.align) {
      case 'right':
        return 'text-align: right;';
      case 'left':
        return 'text-align: left;';
      case 'center':
        return 'text-align: center';
      default:
        return 'text-align: left;';
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.5rem;
  `};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && 'text-decoration: underline'};
  ${props => props.uppercase && 'text-transform: uppercase;'}
`;

const H5 = styled.h5`
  font-size: ${props => props.theme.fontSize.heading5};
  font-family: ${props => props.theme.font[props.font]};
  margin: 0;

  ${props =>
    props.font &&
    props.font !== 'light' &&
    props.font !== 'lightItalic' &&
    `
        letter-spacing: 0.5px;
      `};

  ${props => {
    switch (props.align) {
      case 'right':
        return 'text-align: right;';
      case 'left':
        return 'text-align: left;';
      case 'center':
        return 'text-align: center';
      default:
        return 'text-align: left;';
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize}px;
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.5rem;
  `};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && 'text-decoration: underline'};
  ${props => props.uppercase && 'text-transform: uppercase;'}
`;

const H6 = styled.h6`
  font-size: ${props => props.theme.fontSize.heading6};
  font-family: ${props => props.theme.font[props.font]};
  margin: 0;

  ${props =>
    props.font &&
    props.font !== 'light' &&
    props.font !== 'lightItalic' &&
    `
        letter-spacing: 0.5px;
      `};

  ${props => {
    switch (props.align) {
      case 'right':
        return 'text-align: right;';
      case 'left':
        return 'text-align: left;';
      case 'center':
        return 'text-align: center';
      default:
        return 'text-align: left;';
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.5rem;
  `};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && 'text-decoration: underline'};
  ${props => props.uppercase && 'text-transform: uppercase;'}
`;

const P = styled.p`
  font-family: ${props => props.theme.font[props.font]};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`} font-size: 1rem;
  margin: 0;

  ${props =>
    props.font &&
    props.font !== 'light' &&
    props.font !== 'lightItalic' &&
    `
        letter-spacing: 0.5px;
      `};

  ${props => {
    switch (props.align) {
      case 'right':
        return 'text-align: right;';
      case 'left':
        return 'text-align: left;';
      case 'center':
        return 'text-align: center';
      default:
        return 'text-align: left;';
    }
  }};

  ${props =>
    props.variant === 'muted' &&
    `
    color: ${props.theme.grey.lightGrey};
  `};

  ${props =>
    props.variant &&
    `
    font-size: ${props.theme.fontSize[props.variant]};
  `};
  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};

  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};

  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.35rem;
  `};

  ${props => props.underline && 'text-decoration: underline'};
  ${props => props.uppercase && 'text-transform: uppercase;'}
`;

export { H1, H2, H3, H4, H5, H6, P };
