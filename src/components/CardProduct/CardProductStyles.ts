import { motion } from "framer-motion";
import styled from "styled-components";

export const CardProduct = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.1352);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ImageContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
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

export const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 500;
  max-width: 7.75rem;
`;

export const Price = styled.span`
  font-size: 1rem;
  font-weight: 500;
  background-color: #373737;
  padding: 0.25rem 0.5rem;
  color: #fff;
  font-weight: 700;
  margin-left: 0.75rem;
  border-radius: 0.25rem;
`;

export const Description = styled.p`
  margin-bottom: 0.75rem;
  padding: 0 0.875rem;
  font-size: 1rem;
  font-weight: 300;
`;

export const Button = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
  background-color: #0f52ba;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 0 0 0.5rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  img {
    margin-right: 0.875rem;
  }
`;
