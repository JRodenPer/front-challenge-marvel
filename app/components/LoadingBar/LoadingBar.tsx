import React from "react";
import styled, { css, keyframes } from "styled-components";

interface LoadingBarProps {
  isLoading: boolean;
}

const fillAnimation = keyframes`
  from {
    width: 1px;
  }
  to {
    width: 100%;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const LoadingBarContainer = styled.div`
  width: 100%;
  height: 5.38px;
  background-color: transparent;
  position: relative;
`;

const Bar = styled.div<{ $isLoading: boolean }>`
  height: 5.38px;
  background-color: #ec1d24;
  width: ${(props) => (props.$isLoading ? "1px" : "100%")};
  ${(props) =>
    !props.$isLoading &&
    css`
      animation: ${fillAnimation} 1s forwards, ${fadeOut} 1s 1s forwards;
    `}
`;

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading }) => {
  return (
    <LoadingBarContainer>
      <Bar $isLoading={isLoading} data-testid="loading-bar" />
    </LoadingBarContainer>
  );
};

export default LoadingBar;
