import styled from "styled-components";

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  min-width: 179.2px;
  max-width: 179.2px;
  height: auto;
  gap: var(--space-16);
  justify-content: space-between;

  align-items: flex-start;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 268.8px;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 0;
`;

export const CardTitle = styled.h3`
  white-space: normal;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    font-weight: var(--font-weight2);
    font-size: var(--font-size-big);
    line-height: var(--line-height-big);
  }
  @media (min-width: 480.1px) and (max-width: 768px) {
    font-weight: var(--font-weight2);
    font-size: var(--space-15);
    line-height: var(--space-18);
  }
`;

export const CardText = styled.p`
  font-style: normal;
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
  display: flex;
  align-items: center;
  margin-top: var(--space-8);

  @media (max-width: 480px) {
    font-size: var(--font-size-small);
    line-height: var(--line-height-small);
  }
  @media (min-width: 480.1px) and (max-width: 768px) {
    font-size: var(--font-size-small);
    line-height: var(--space-13);
  }
`;
