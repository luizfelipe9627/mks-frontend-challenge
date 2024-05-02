import styled from "styled-components";

export const ShoppingCart = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  gap: 1rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: #000;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.2s;

  &:hover {
    background-color: #EEEEEE;
  }

  img {
    width: initial;
  }
`;

export const Count = styled.span`
  min-width: 1.25rem;
  text-align: left;
`;
