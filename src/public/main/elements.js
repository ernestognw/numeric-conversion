import styled from "styled-components";
import {
  Card as CommonCard,
  CardBody as CommonCardBody
} from "components/common/card";

const Card = styled(CommonCard)`
  max-width: 500px;
  margin: 20px;
  margin-top: auto;
`;

const CardBody = styled(CommonCardBody)`
  overflow-x: scroll;
`;

export { Card, CardBody };
