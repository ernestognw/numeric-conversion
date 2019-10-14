import styled from "styled-components";
import RoundFavorite from "react-md-icon/dist/RoundFavorite";

const LoveIcon = styled(RoundFavorite)`
  font-size: 0.7em;
  color: ${props => props.theme.color.secondary};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.grey.default};
  border-top: 1px solid ${props => props.theme.grey.semiDark};
  height: 40px;
  margin-top: auto;
  justify-content: center;
`;

export { Container, LoveIcon };
