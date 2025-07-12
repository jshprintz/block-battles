import { Link } from "react-router-dom";
import { FlexCol, FlexRow } from "../../styles/core/styles";
import styled from "styled-components";
import { Container, HeaderContainer, Menu } from "../LandingPage/LandingPage";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { IWarrior } from "../../types/core";
import { TeamPreview } from "./Components/TeamPreview";
import { WarriorCard } from "./Components/WarriorCard";

const StartPage = () => {
  const [warriorList, setWarriorList] = useState<IWarrior[]>();
  const [currentWarrior, setCurrentWarrior] = useState<IWarrior>();
  const [warriorNumber, setWarriorNumber] = useState<number>(0);

  console.log("Current", currentWarrior);

  const onLeftClick = () => {
    if (warriorNumber === 0) {
      setWarriorNumber(4);
    } else {
      setWarriorNumber(warriorNumber - 1);
    }
    console.log("warriorNumber", warriorNumber);
  };

  const onRightClick = () => {
    if (warriorNumber === 4) {
      setWarriorNumber(0);
    } else {
      setWarriorNumber(warriorNumber + 1);
    }
    console.log("warriorNumber", warriorNumber);
  };

  useEffect(() => {
    fetch("/block-battles/warrior_list.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const data = json as IWarrior[];
        setWarriorList(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  useEffect(() => {
    console.log("warriorList", warriorList);
    if (warriorList) {
      console.log(warriorList[warriorNumber]);
      setCurrentWarrior(warriorList[warriorNumber]);
    }
  }, [warriorNumber, warriorList]);

  return (
    <StartPageContainer>
      <StartPageHeader>
        <h2>Choose Warriors</h2>
      </StartPageHeader>

      <CardDescription>
        Here is a sample description of the card. It contains an anecdote
        related to the image and name. It can fit three lines.
      </CardDescription>

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
`;

const SelectionBoxContainer = styled(FlexRow)`
  justify-content: space-evenly;
  border: 1px solid yellow;
`;

const SelectionBox = styled(Menu)`
  justify-content: space-between;
  border: 2px solid white;
  width: 100%;
  height: 80%;
`;

const CardHeader = styled(FlexRow)`
  height: 40px;
  font-size: 125%;
  padding: 5px;
  justify-content: space-between;
  border-bottom: 2px solid white;
`;

const CardImage = styled.img`
  height: 50%;
  width: 100%;

  border: 1px solid blue;
`;

const CardStatsContainer = styled.ul`
  height: auto;
  width: 100%;
  font-size: 125%;
  list-style: none;
`;

const CardStats = styled.li`
  margin-bottom: 5px;
`;

const TeamBox = styled(FlexRow)`
  height: 200px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  justify-content: space-evenly;
`;

const TeamCard = styled(FlexCol)`
  width: 15%;
  height: 95%;
  border: 1px solid white;
  justify-content: space-around;
  border-radius: 5px;
`;

const HomeButton = styled(Link)`
  color: white;
  margin: 10px;
`;

export default StartPage;
