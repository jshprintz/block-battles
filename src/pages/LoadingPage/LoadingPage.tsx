import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingPage: React.FC = () => {
  return (
    <LoadingWrapper>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: #ffffff;
`;

const Spinner = styled.div`
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-top: 6px solid #4cafef;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 16px;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
`;

export default LoadingPage;
