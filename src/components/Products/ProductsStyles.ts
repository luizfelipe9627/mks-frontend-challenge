import styled from "styled-components";

export const Product = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.375rem;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 1.25rem;
  text-align: center;
`;

export const EmptyProducts = styled.p`
  font-size: 1.25rem;
  text-align: center;
`;
