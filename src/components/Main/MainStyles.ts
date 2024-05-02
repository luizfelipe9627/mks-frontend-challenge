import styled from "styled-components";

export const Main = styled.main`
  max-width: 70vw;
  margin: 0 auto;
  padding: 7.25rem 0;
  min-height: calc(100vh - 8.9375rem);

  @media (max-width: 1000px) {
    max-width: 90vw;
    padding: 3.625rem 0
  }
`;
