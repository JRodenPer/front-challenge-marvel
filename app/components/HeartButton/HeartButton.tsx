import styled from "styled-components";
import HeartMin from "@/public/icons/heartMin.svg";
import HeartBorderMin from "@/public/icons/HeartBorderMin.svg";

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const IconHeartMin = styled(HeartMin)<{ $isHover: boolean }>`
  z-index: 1;
  fill: ${(props) => (props.$isHover ? "white" : "red")};
  transform: scale(1);
  transition: fill 0.5s;
`;

const IconHeartBorderMin = styled(HeartBorderMin)<{ $isHover: boolean }>`
  z-index: 1;
  fill: ${(props) => (props.$isHover ? "white" : "red")};
  transform: scale(1);
  transition: fill 0.5s;
`;

interface HeartButtonProps {
  isHover: boolean;
  isLike: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const HeartButton: React.FC<HeartButtonProps> = ({
  isHover,
  isLike,
  onClick,
}) => {
  return (
    <Button onClick={onClick}>
      {isLike ? (
        <IconHeartMin $isHover={isHover} />
      ) : (
        <IconHeartBorderMin $isHover={isHover} />
      )}
    </Button>
  );
};

export default HeartButton;
