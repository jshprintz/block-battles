import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from "react";

import { FlexRow } from "../../styles/core/styles";
import { Container, HeaderContainer } from "../LandingPage/LandingPage";
import { IWarrior } from "../../types/core";
import { TeamPreview } from "./Components/TeamPreview";
import { WarriorCard } from "./Components/WarriorCard";
import { warriors as warriorList } from "../../data/constants";

const StartPage = () => {
  const [warriorNumber, setWarriorNumber] = useState(0);
  const currentWarrior: IWarrior = warriorList[warriorNumber];

  const onLeftClick = () => {
    setWarriorNumber((prev) =>
      prev === 0 ? warriorList.length - 1 : prev - 1
    );
  };

  const onRightClick = () => {
    setWarriorNumber((prev) =>
      prev === warriorList.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <StartPageContainer>
      <StartPageHeader>
        <h2>Choose Warriors</h2>
      </StartPageHeader>

      <CardDescription>{currentWarrior.description}</CardDescription>

      <SelectionBoxContainer>
        <HiChevronLeft
          size={150}
          style={{ cursor: "pointer" }}
          onClick={onLeftClick}
        />
        <WarriorCard />
        <HiChevronRight
          size={150}
          style={{ cursor: "pointer" }}
          onClick={onRightClick}
        />
      </SelectionBoxContainer>

      <TeamPreview />
      <HomeButton to="/">Home</HomeButton>
    </StartPageContainer>
  );
};

const StartPageContainer = styled(Container)`
  background-color: black;
  color: white;
`;

const StartPageHeader = styled(HeaderContainer)`
  max-height: 20%;
  border: 1px solid blue;
`;

const CardDescription = styled(FlexRow)`
  height: 150px;
  border: 2px solid white;
  text-align: center;
  padding: 1rem;
`;

const SelectionBoxContainer = styled(FlexRow)`
  justify-content: space-evenly;
  border: 1px solid yellow;
`;

const HomeButton = styled(Link)`
  color: white;
  margin: 10px;
`;

export default StartPage;
