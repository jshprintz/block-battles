import styled, { css } from "styled-components";
import { FlexCol, FlexRow } from "../../../styles/core/styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { IWarrior } from "../../../types/core";
import { useEffect, useState } from "react";
import { warriors } from "../../../server/data/warriorData";
import { NUM_OF_WARRIORS_ON_TEAM } from "../../../Constants";
import { randomSkillDistribution } from "../../../helpers/randomSkillDistribution";
import { computerTeamDataStore } from "../../../server/stores/TeamDataStore";

const ComputerBattlePage: React.FC = observer(() => {
  const [noSkillTeam, setNoSkillTeam] = useState<IWarrior[]>();

  // Set the computer team
  useEffect(() => {
    const warriorsList: IWarrior[] = warriors;
    const warriorCount: number = warriorsList.length;
    const computerWarriorList: IWarrior[] = [];

    for (let i = 0; i < NUM_OF_WARRIORS_ON_TEAM; i++) {
      const randomNum = Math.floor(Math.random() * warriorCount);
      const randomWarrior: IWarrior = {
        ...warriorsList[randomNum],
        id: crypto.randomUUID(),
      };
      computerTeamDataStore.addWarrior(randomWarrior);
    }

    setNoSkillTeam(computerWarriorList);
    randomSkillDistribution(computerWarriorList);
  }, []);

  return (
    <Container>
      <ComputerBattlePageContainer>
        <HeaderContainer>
          <h1>COMPUTER BATTLE</h1>
        </HeaderContainer>
        <FlexCol>
          <FlexRow style={{ height: "400px" }}>
            {noSkillTeam?.map((warrior) => {
              const power: number = warrior.skillTree.power;
              const accuracy: number = warrior.skillTree.accuracy;
              const conditioning: number = warrior.skillTree.conditioning;
              const speed: number = warrior.skillTree.speed;
              const health: number = warrior.skillTree.health;
              const total: number =
                power + accuracy + conditioning + speed + health;

              return (
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
                    <li>Power: {power}</li>
                    <li>Accuracy: {accuracy}</li>
                    <li>Conditioning: {conditioning}</li>
                    <li>Speed: {speed}</li>
                    <li>Health: {health}</li>
                    <li>Total: {total}</li>
                    <li>Diff: {total - 9}</li>
                  </ul>
                  <p style={{ textAlign: "center" }}>{warrior.id}</p>
                </FlexCol>
              );
            })}
          </FlexRow>
          <FlexRow style={{ height: "400px" }}>
            {computerTeamDataStore.assembledTeam?.map((warrior) => {
              const power: number = warrior.skillTree.power;
              const accuracy: number = warrior.skillTree.accuracy;
              const conditioning: number = warrior.skillTree.conditioning;
              const speed: number = warrior.skillTree.speed;
              const health: number = warrior.skillTree.health;
              const total: number =
                power + accuracy + conditioning + speed + health;

              return (
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
                    <li>Power: {power}</li>
                    <li>Accuracy: {accuracy}</li>
                    <li>Conditioning: {conditioning}</li>
                    <li>Speed: {speed}</li>
                    <li>Health: {health}</li>
                    <li>Total: {total}</li>
                    <li>Diff: {total - 9}</li>
                  </ul>
                  <p style={{ textAlign: "center" }}>{warrior.id}</p>
                </FlexCol>
              );
            })}
          </FlexRow>
        </FlexCol>
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
