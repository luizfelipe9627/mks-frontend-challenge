import { motion } from 'framer-motion';
import styled from "styled-components";

export const CardCheckout = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem 1.25rem;
  border-radius: 0.5rem;
  background-color: #fff;
  position: relative;
  margin-top: 0.375rem;
  gap: 0.5rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 0.75rem;
    width: 8ch;
  }
`;

export const ContainerCount = styled.div`
  display: flex;
  align-items: center;
  border: 0.0625rem solid #bfbfbf;
  border-radius: 0.25rem;
  font-weight: 500;

  button {
    background-color: transparent;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    font-weight: 500;

    &:nth-child(1) {
      padding: 0 0.5rem 0 0.75rem;
      border-right: 0.0625rem solid #bfbfbf;
    }

    &:nth-child(3) {
      padding: 0 0.75rem 0 0.5rem;
      border-left: 0.0625rem solid #bfbfbf;
    }
  }

  span {
    font-size: 0.875rem;
    padding: 0 0.625rem;
    margin: 0.25rem 0;
  }
`;

export const PriceContainer = styled.div`
  span {
    font-weight: 700;
  }
`;

export const Button = styled(motion.button)`
  position: absolute;
  top: -0.375rem;
  right: -0.375rem;
  background-color: #000;
  border: none;
  border-radius: 50%;
  width: 1.375rem;
  height: 1.375rem;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #fff;

  &:hover {
    background-color: #2c2c2c;
  }
`;
