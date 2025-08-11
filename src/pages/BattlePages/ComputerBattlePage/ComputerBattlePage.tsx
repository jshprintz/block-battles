import styled, { css } from "styled-components";
import { FlexCol, FlexRow } from "../../../styles/core/styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { IWarrior } from "../../../types/core";
import { useCallback, useEffect, useState } from "react";
import { warriors } from "../../../server/data/warriorData";
import { NUM_OF_WARRIORS_ON_TEAM } from "../../../Constants";
import { randomSkillDistribution } from "../../../helpers/randomSkillDistribution";
import {
  computerTeamDataStore,
  teamDataStore,
} from "../../../server/stores/TeamDataStore";
import { WarriorCard } from "./Components/WarriorCard";

const ComputerBattlePage: React.FC = observer(() => {
  const setupComputerTeam = useCallback(() => {
    const warriorsList: IWarrior[] = warriors;
    const warriorCount: number = warriorsList.length;

    for (let i = 0; i < NUM_OF_WARRIORS_ON_TEAM; i++) {
      const randomNum = Math.floor(Math.random() * warriorCount);
      const randomWarrior: IWarrior = {
        ...warriorsList[randomNum],
        id: crypto.randomUUID(),
      };
      computerTeamDataStore.addWarrior(randomWarrior);
    }

    randomSkillDistribution(computerTeamDataStore);
  }, []);

  useEffect(() => {
    setupComputerTeam();
  }, [setupComputerTeam]);

  return (
    <Container>
      <ComputerBattlePageContainer>
        <HeaderContainer>
          <h1>COMPUTER BATTLE</h1>
        </HeaderContainer>
        <h2>Computer</h2>
        <FlexCol>
          <FlexRow style={{ height: "400px" }}>
            {computerTeamDataStore.assembledTeam?.map((warrior) => {
              return <WarriorCard key={warrior.id} currentWarrior={warrior} />;
            })}
          </FlexRow>
        </FlexCol>
        <h2>User</h2>
        <FlexCol>
          <FlexRow style={{ height: "400px" }}>
            {teamDataStore.assembledTeam?.map((warrior) => {
              return <WarriorCard key={warrior.id} currentWarrior={warrior} />;
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
