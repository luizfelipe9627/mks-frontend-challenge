import { motion } from "framer-motion";
import styled from "styled-components";

export const Checkout = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100dvh;
  z-index: 9999;
`;

export const Container = styled.div`
  width: 27.5rem;
  display: flex;
  flex-direction: column;
  opacity: 1;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #0f52ba;
  box-shadow: -0.3125rem 0 0.375rem 0 rgba(0, 0, 0, 0.13);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  padding: 1.5rem 1.5rem 0 1.5rem;
  color: #fff;

  h1 {
    font-size: 1.5rem;
    max-width: 12ch;
    font-size: 1.5rem;
  }

  button {
    background-color: #000;
    border: none;
    color: #fff;
    font-size: 1.25rem;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #2c2c2c;
    }
  }
`;

export const Products = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  padding: 0 1.5rem;
  overflow-y: auto;
  height: 100%;
  margin-top: 2rem;

  &::-webkit-scrollbar {
    width: 0.375rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #000;
    border-radius: 0.3125rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 0.3125rem;
  }
`;

export const EmptyCart = styled.p`
  color: #fff;
  font-size: 1.125rem;
  text-align: center;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.125rem 1.5rem;
  color: #fff;
  font-weight: bold;
  font-size: 1.125rem;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #000000;
  padding: 0.875rem 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c2c2c;
  }
`;
