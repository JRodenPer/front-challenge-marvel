import styled from "styled-components";

export const TopbarContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 16px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  z-index: 200;
`;

export const LogoImage = styled.img`
  width: 130px;
  height: 52px;
  cursor: pointer;
`;

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const CustomText = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
