import styled, { css } from "styled-components";
import { FlexCol, FlexRow } from "../../../styles/core/styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { IWarrior } from "../../../types/core";
import { useEffect, useState } from "react";
import { warriors } from "../../../server/data/warriorData";
import { NUM_OF_WARRIORS_ON_TEAM } from "../../../Constants";
import { randomSkillDistribution } from "../../../helpers/randomSkillDistribution";

const ComputerBattlePage: React.FC = observer(() => {
  const [computerTeam, setComputerTeam] = useState<IWarrior[]>();

  useEffect(() => {
    if (computerTeam?.length === NUM_OF_WARRIORS_ON_TEAM) {
      console.log("No Computer Team");
      return;
    }

    const warriorsList: IWarrior[] = warriors;
    const warriorCount: number = warriorsList.length;
    const computerWarriorList: IWarrior[] = [];

    for (let i = 0; i < NUM_OF_WARRIORS_ON_TEAM; i++) {
      const randomNum = Math.floor(Math.random() * warriorCount);
      const randomWarrior: IWarrior = {
        ...warriorsList[randomNum],
        id: crypto.randomUUID(),
      };

      computerWarriorList.push(randomWarrior);
    }

    setComputerTeam(computerWarriorList);
  }, []);

  console.log("Computer Team", computerTeam);

  return (
    <Container>
      <ComputerBattlePageContainer>
        <HeaderContainer>
          <h1>COMPUTER BATTLE</h1>
        </HeaderContainer>
        <FlexRow style={{ height: "400px" }}>
          {computerTeam?.map((warrior) => (
            <FlexCol
              key={warrior.id}
              style={{
                border: "1px solid white",
                fontSize: "20pt",
                width: "300px",
              }}
            >
              {warrior.name}
              <ul>
                <li>Power: {warrior.skillTree.power}</li>
                <li>Accuracy: {warrior.skillTree.accuracy}</li>
                <li>Conditioning: {warrior.skillTree.conditioning}</li>
                <li>Speed: {warrior.skillTree.speed}</li>
                <li>Health: {warrior.skillTree.health}</li>
              </ul>
            </FlexCol>
          ))}
        </FlexRow>
      </ComputerBattlePageContainer>
      <Link to="/">Return Home</Link>
    </Container>
  );
});

const Container = styled(FlexCol)`
  height: 99dvh;
  font-size: 100%;
  overflow: auto;
  justify-content: space-around;

  font-family: "Barriecito", system-ui;
  font-weight: 400;
  font-style: normal;
`;

const ComputerBattlePageContainer = styled(FlexCol)`
  justify-content: space-around;
  color: white;
  background-color: black;
`;

const HeaderContainer = styled(FlexCol)`
  height: 200px;
  text-align: center;
  font-size: 300%;
`;

export default ComputerBattlePage;
