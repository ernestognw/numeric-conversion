import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeaderContainer,
  CardBody,
  CardFooter,
  HeaderTitle,
  HeaderSubtitle
} from './elements';

const CardHeader = ({ title, subtitle }) => (
  <CardHeaderContainer>
    {title && <HeaderTitle>{title}</HeaderTitle>}
    {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
  </CardHeaderContainer>
);

CardHeader.defaultProps = {
  title: null,
  subtitle: null
};

CardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export { Card, CardFooter, CardBody, CardHeader };
