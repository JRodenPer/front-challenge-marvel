import styled from "styled-components";

export const SearchContainer = styled.div`
  height: 19px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 1px solid var(--primary-color);
  width: 100%;
`;

export const IconContainer = styled.div`
  margin-bottom: var(--space-10);
`;

export const Input = styled.input`
  flex: 1;
  font-size: var(--font-size-big);
  font-weight: var(--font-weight1);
  line-height: var(--line-height-big);
  border: none;
  outline: none;
  margin-left: var(--space-8);
  margin-bottom: var(--space-10);

  &::placeholder {
    color: var(--gray-color);
    font-weight: var(--font-weight1);
    font-size: var(--font-size-big);
    line-height: var(--line-height-big);
  }
`;
