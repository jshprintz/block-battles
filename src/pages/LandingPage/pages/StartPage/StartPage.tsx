import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Container, FlexCol, FlexRow } from "@/styles/core/styles";
import { IWarrior } from "@/types/core";
import { warriors as warriorList } from "@/server/data/warriorData";
import { observer } from "mobx-react-lite";
import { NUM_OF_WARRIORS_ON_TEAM } from "@/Constants";
import { StartPageWarriorCard, StartPageTeamPreview } from "./Components";
import { deviceStore } from "@/server";

const StartPage = observer(() => {
  const [warriorNumber, setWarriorNumber] = useState(
    Math.floor(Math.random() * NUM_OF_WARRIORS_ON_TEAM)
  );
  const [currentWarrior, setCurrentWarrior] = useState<IWarrior>(
    warriorList[warriorNumber]
  );
  const isMobile: boolean = deviceStore.isMobile;

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

  useEffect(() => {
    setCurrentWarrior(warriorList[warriorNumber]);
  }, [warriorNumber]);

  return (
    <StartPageContainer>
      <StartPageHeader $isMobile={isMobile}>
        <h2>Choose Warriors</h2>
      </StartPageHeader>
      <CardDescription>{currentWarrior.description}</CardDescription>
      <SelectionBoxContainer>
        <HiChevronLeft
          size={150}
          style={{
            cursor: "pointer",
            width: "100px",
          }}
          onClick={onLeftClick}
        />
        <StartPageWarriorCard currentWarrior={currentWarrior} />
        <HiChevronRight
          size={150}
          style={{
            cursor: "pointer",
            width: "100px",
          }}
          onClick={onRightClick}
        />
      </SelectionBoxContainer>
      <StartPageTeamPreview />
      <HomeButton to="/">Home</HomeButton>
    </StartPageContainer>
  );
});

const StartPageContainer = styled(Container)`
  background-color: black;
  color: white;
`;

const HeaderContainer = styled(FlexCol)`
  height: auto;
  text-align: center;
  font-size: 300%;
`;

const StartPageHeader = styled(HeaderContainer)<{ $isMobile: boolean }>`
  height: ${(p) => (p.$isMobile ? "10%" : "15%")};
  user-select: none;
  margin: 5px;
  font-size: ${(p) => (p.$isMobile ? "200%" : "300%")};
`;

const CardDescription = styled(FlexRow)`
  height: 150px;
  border: 2px solid white;
  text-align: center;
  padding: 1rem;
  user-select: none;
  font-size: 14pt;
`;

const SelectionBoxContainer = styled(FlexRow)`
  justify-content: space-evenly;
`;

const HomeButton = styled(Link)`
  color: white;
  margin: 10px;
`;

export default StartPage;
export { StartPage };
