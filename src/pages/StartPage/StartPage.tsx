import { Link } from "react-router-dom";
import { FlexCol, FlexRow } from "../../styles/core/styles";
import styled from "styled-components";
import { Container, HeaderContainer, Menu } from "../LandingPage/LandingPage";

const StartPage = () => {
  return (
    <StartPageContainer>
      <StartPageHeader>
        <h2>Choose Warriors</h2>
      </StartPageHeader>
      <SelectionBoxContainer>
        <SelectionBox>
          <h2>Hello</h2>
          <h2>World</h2>
        </SelectionBox>
      </SelectionBoxContainer>

      <TeamBox></TeamBox>
      <HomeButton to="/">Home</HomeButton>
    </StartPageContainer>
  );
};

const StartPageContainer = styled(Container)`
  background-color: black;
  color: white;
`;

const StartPageHeader = styled(HeaderContainer)``;

const SelectionBoxContainer = styled(FlexRow)`
  border: 1px solid yellow;
`;

const SelectionBox = styled(Menu)`
  border: 2px solid white;
`;

const TeamBox = styled(FlexRow)`
  height: 100px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
`;

const HomeButton = styled(Link)`
  color: white;
`;

export default StartPage;
