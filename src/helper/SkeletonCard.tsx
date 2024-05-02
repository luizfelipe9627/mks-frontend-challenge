import React from "react";
import * as S from "./SkeletonCardStyles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <SkeletonTheme enableAnimation baseColor="#202020" highlightColor="#444" duration={1}>
      <S.Skeleton data-testid="skeleton-loading">
        <S.ImageContainer>
          <Skeleton height={200} />
        </S.ImageContainer>

        <S.TitleContainer>
          <Skeleton height={30} width={112} />
          <Skeleton height={25} width={62} />
        </S.TitleContainer>

        <S.Description>
          <Skeleton count={4} />
        </S.Description>

        <S.Button>
          <Skeleton height={30} />
        </S.Button>
      </S.Skeleton>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
