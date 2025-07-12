import { Link } from "react-router-dom";
import { FlexCol, FlexRow } from "../../styles/core/styles";
import styled from "styled-components";
import { Container, HeaderContainer, Menu } from "../LandingPage/LandingPage";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { IWarriorList } from "../../types/core";

const StartPage = () => {
  const [warriorList, setWarriorList] = useState<IWarriorList>();

  useEffect(() => {
    fetch("/block-battles/warrior_list.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setWarriorList(json);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  console.log("Warrior List", warriorList);

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
        <HiChevronLeft size={150} style={{ cursor: "pointer" }} />
        <SelectionBox>
          <CardHeader>
            <span>NAME</span>
            <span>CLASS</span>
          </CardHeader>
          <CardImage />
          <CardStatsContainer>
            <CardStats>Power</CardStats>
            <CardStats>Accuracy</CardStats>
            <CardStats>Conditioning</CardStats>
            <CardStats>Speed</CardStats>
            <CardStats>Health</CardStats>
          </CardStatsContainer>
        </SelectionBox>
        <HiChevronRight size={150} style={{ cursor: "pointer" }} />
      </SelectionBoxContainer>
      <TeamBox>
        <TeamCard>
          <div>Image</div>
          <div>Class</div>
        </TeamCard>
        <TeamCard>
          <div>Image</div>
          <div>Class</div>
        </TeamCard>
        <TeamCard>
          <div>Image</div>
          <div>Class</div>
        </TeamCard>
        <TeamCard>
          <div>Image</div>
          <div>Class</div>
        </TeamCard>
        <TeamCard>
          <div>Image</div>
          <div>Class</div>
        </TeamCard>
      </TeamBox>
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
