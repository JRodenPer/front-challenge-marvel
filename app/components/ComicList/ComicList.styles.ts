import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  margin-top: var(--space-48);
  margin-bottom: var(--space-48);
  gap: var(--space-24);
`;

export const ListContainer = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: flex-start;
  cursor: grab;
  user-select: none;
  width: 960px;
  gap: var(--space-16);
  padding-bottom: var(--space-24);
  overflow-x: hidden;
  max-width: 100%;
  padding-left: var(--space-24);

  img {
    user-drag: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding-left: 0;
    overflow-x: auto;
    &:active {
      cursor: grabbing;
    }

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--item-color);
    }

    &::-webkit-scrollbar-track {
      background-color: #d9d9d9;
    }
    &::-webkit-scrollbar-thumb:hover {
      cursor: default;
    }
    &::-webkit-scrollbar-track:hover {
      cursor: default;
    }
  }
`;

export const TitleContainer = styled.h1`
  font-size: var(--font-size-title-small);
  line-height: var(--line-height-title-small);
  display: flex;
  max-width: 100%;
  width: 960px;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: var(--space-24);
  }
`;
