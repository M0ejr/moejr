import styled, { keyframes } from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background: #fff;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 15px;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContentLine = styled.div`
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: ${(props) => props.delay};
  opacity: 0;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    margin-bottom: 1.5rem;
  }
`;

export const ContentHeader = styled.h3`
  color: #000;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const ContentText = styled.p`
  color: #000;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;
