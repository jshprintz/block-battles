import styled from "styled-components";
import { FlexCol, FlexRow } from "../../styles/core/styles";
import { IWarrior } from "../../types/core";
import { teamDataStore } from "../../server/stores/TeamDataStore";
import { WarriorCardSkillPoints } from "./Components/WarriorCardSkillPoints";
import { observer } from "mobx-react-lite";

const AssignSkillsPage = observer(() => {
  const assembledTeam: IWarrior[] = teamDataStore.assembledTeam;
  const availableSkillPoints: number = teamDataStore.bonusSkillPointCount;
  const isLastSkill: boolean = availableSkillPoints === 1;
  const isNoSkills: boolean = availableSkillPoints === 0;

  return (
    <Container>
      <AssignSkillsPageContainer>
        <HeaderContainer>
          {isLastSkill ? (
            <h1>ONE MORE!</h1>
          ) : isNoSkills ? (
            <h1>LET'S GO!!!</h1>
          ) : (
            <h1>ASSIGN {availableSkillPoints} SKILLS</h1>
          )}
        </HeaderContainer>
        <AssignSkillsCardsContainer>
          {assembledTeam.map((warrior, warriorIndex) => {
            return (
              <WarriorCardSkillPoints
                key={`${warrior.name}-${warrior.class}-${warriorIndex}`}
                currentWarrior={warrior}
              />
            );
          })}
        </AssignSkillsCardsContainer>
      </AssignSkillsPageContainer>
    </Container>
  );
});

const Container = styled(FlexCol)`
  font-size: 100%;
  overflow: auto;
  justify-content: space-between;

  font-family: "Barriecito", system-ui;
  font-weight: 400;
  font-style: normal;
`;

const AssignSkillsPageContainer = styled(FlexCol)`
  justify-content: space-between;
  color: white;
  background-color: black;
`;

const AssignSkillsCardsContainer = styled(FlexRow)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const HeaderContainer = styled(FlexCol)`
  height: 200px;
  text-align: center;
  font-size: 300%;
`;

export default AssignSkillsPage;
