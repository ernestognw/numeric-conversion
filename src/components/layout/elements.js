import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.default};
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Container;
