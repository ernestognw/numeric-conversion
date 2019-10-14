import styled from "styled-components";
import { Card, CardBody } from "components/common/card";

const Container = styled(Card)`
  width: 100%;
  border-left: 4px solid ${props => props.theme.color[props.type]};
  margin-bottom: 20px;
  margin-top: 10px;

  &:hover {
    box-shadow: ${props => props.theme.shadow};
  }
`;

const Body = styled(CardBody)`
  display: flex;
  width: 100%;

  svg {
    color: ${props => props.theme.color[props.type]};
    font-size: 22px;
  }
`;

const Text = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 20px;
`;

export { Container, Body, Text, IconContainer };
