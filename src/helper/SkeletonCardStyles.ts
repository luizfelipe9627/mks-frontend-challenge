import styled from "styled-components";

export const Skeleton = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3125rem;
  background-color: #ffffff;
  box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.1352);
`;

export const ImageContainer = styled.div`
  padding: 1.125rem 0.875rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 0 0.875rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const Description = styled.div`
  padding: 0 0.875rem;
  margin-bottom: 0.75rem;
`;

export const Button = styled.div`
  span {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;
