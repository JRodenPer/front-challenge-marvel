import styled from "styled-components";

export const TopbarContainer = styled.div`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: var(--space-16) var(--space-48);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: var(--space-20);

  @media (max-width: 480px) {
    padding: var(--space-16);
  }
`;

export const LogoImage = styled.img`
  width: 130px;
  height: 52px;
  cursor: pointer;
`;

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-8);
  cursor: pointer;
`;
