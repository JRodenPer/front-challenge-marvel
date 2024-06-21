import styled from "styled-components";

export const MainContainer = styled.div``;
export const BodyContainer = styled.div`
  padding: var(--space-48) 0px;
  gap: var(--space-24);
`;

export const CustomText = styled.p`
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
`;

export const TitleContainer = styled.h1`
  font-size: var(--font-size-title-small);
  line-height: var(--line-height-title-small);
  display: flex;
  width: 960px;
  text-transform: uppercase;
  padding: 0px var(--space-48) var(--space-24);

  @media (max-width: 768px) {
    padding: 0px var(--space-16) var(--space-24);
    font-size: var(--space-24);
    line-height: var(--space-28);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-12) var(--space-48);
  gap: var(--space-12);
  overflow: visible;
  @media (max-width: 480px) {
    padding: var(--space-12) var(--space-16);
  }
`;
