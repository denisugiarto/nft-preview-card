import React from "react";
import styled from "styled-components";
import ImageEquilibrium from "../assets/images/image-equilibrium.jpg";
import IconEth from "../assets/icons/icon-ethereum.svg";
import IconView from "../assets/icons/icon-view.svg";
import IconClock from "../assets/icons/icon-clock.svg";
import ImageAvatar from "../assets/images/image-avatar.png";

const NftCardPreview = () => {
  return (
    <Container>
      <ImageWrapper>
        <Images src={ImageEquilibrium} alt='equilibrium' />
        <ViewHover>
          <img src={IconView} alt='view' height='32px' width='32px' />
        </ViewHover>
      </ImageWrapper>
      <Title>Equilibrium #3429</Title>
      <Text>Our Equilibrium collection promotes balance and calm.</Text>
      <ColumnContainer>
        <BalanceWrapper>
          <img src={IconEth} alt='ETH' height='18' />
          <Balance>0.041 ETH</Balance>
        </BalanceWrapper>
        <TimeWrapper>
          <img src={IconClock} alt='clock' height='18' />
          <TimeLeft>3 days left</TimeLeft>
        </TimeWrapper>
      </ColumnContainer>
      <Line />
      <Author>
        <Avatar src={ImageAvatar} alt='author avatar' />
        <Text>
          Creation of
          <AuthorName> Jules Wyvern</AuthorName>
        </Text>
      </Author>
    </Container>
  );
};

export default NftCardPreview;
const theme = {
  colors: {
    softblue: "#8BACDA",
    cyan: "#00FFF8",
    cardBG: "#15263F",
    line: "#2F415B",
  },
};

const Container = styled.div`
  box-sizing: border-box;
  width: 330px;
  padding: 25px;
  background-color: ${theme.colors.cardBG};
  border-radius: 10px;
  color: ${theme.colors.softblue};
  margin: 0;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const ViewHover = styled.div`
  display: none;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 280px;
  height: 280px;
  &:hover ${ViewHover} {
    background-color: rgba(0, 255, 248, 0.5);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    height: 280px;
    width: 280px;
  }
`;

const Images = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 10px;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 1.375em;
  color: white;
  font-weight: 600;
  margin: 15px 0;

  &:hover {
    color: ${theme.colors.cyan};
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-size: 1em;
  font-weight: 300;
  margin: 0;
`;

const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Balance = styled(Text)`
  font-weight: 400;
  color: ${theme.colors.cyan};
  margin: 0 0 0 10px;
`;

const TimeWrapper = styled(BalanceWrapper)``;
const TimeLeft = styled(Text)`
  margin: 0 0 0 15px;
`;

const Line = styled.div`
  background-color: ${theme.colors.line};
  height: 1px;
  width: 100%;
  margin: 15px 0;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border: 1px solid white;
  margin-right: 15px;
`;

const AuthorName = styled.span`
  color: white;
  &:hover {
    color: ${theme.colors.cyan};
    cursor: pointer;
  }
`;
