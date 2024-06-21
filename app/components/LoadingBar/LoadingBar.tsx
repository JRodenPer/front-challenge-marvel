import React from "react";
import * as S from "./LoadingBar.styles";
import { LoadingBarProps } from "./LoadingBar.types";

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading }) => {
  return (
    <S.LoadingBarContainer>
      <S.Bar $isLoading={isLoading} data-testid="loading-bar" />
    </S.LoadingBarContainer>
  );
};

export default LoadingBar;
