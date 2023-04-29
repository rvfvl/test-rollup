import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 400px;
  height: 400px;
  background: ${({ color }) => color};
`;
