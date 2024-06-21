import * as S from "./HeartButton.styles";
import { ButtonSize, HeartButtonProps } from "./HeartButton.types";

const HeartButton: React.FC<HeartButtonProps> = ({
  isHover,
  isLike,
  size = ButtonSize.SMALL,
  onClick,
}) => {
  return (
    <S.Button onClick={onClick}>
      {isLike ? (
        size === ButtonSize.SMALL ? (
          <S.IconHeartMin $isHover={isHover} data-testid="icon-heart-min" />
        ) : (
          <S.IconHeart $isHover={isHover} data-testid="icon-heart" />
        )
      ) : size === ButtonSize.SMALL ? (
        <S.IconHeartBorderMin
          $isHover={isHover}
          data-testid="icon-heart-border-min"
        />
      ) : (
        <S.IconHeartBorder $isHover={isHover} data-testid="icon-heart-border" />
      )}
    </S.Button>
  );
};

export default HeartButton;
