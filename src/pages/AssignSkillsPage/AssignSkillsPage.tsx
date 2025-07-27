import styled from "styled-components";
import { FlexCol, FlexRow } from "../../styles/core/styles";
import { Link } from "react-router-dom";
import { IWarrior } from "../../types/core";
import { teamDataStore } from "../../server/stores/TeamDataStore";
import { WarriorCardSkillPoints } from "./Components/WarriorCardSkillPoints";

function AssignSkillsPage() {
  const assembledTeam: IWarrior[] = teamDataStore.assembledTeam;
  const availableSkillPoints: number = teamDataStore.bonusSkillPointCount;
  const isLastSkill: boolean = availableSkillPoints === 1;

  return (
    <Container>
      <AssignSkillsPageContainer>
        <HeaderContainer>
          {isLastSkill ? (
            <h1>ONE MORE!</h1>
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
}

export const Container = styled(FlexCol)`
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

export const HeaderContainer = styled(FlexCol)`
  height: 200px;
  text-align: center;
  font-size: 300%;
`;

export const Menu = styled(FlexCol)`
  height: 50%;
  width: 75%;
  justify-content: space-evenly;
  border-radius: 5px;
`;

const MenuButton = styled(Link)`
  height: 25%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  text-decoration: none;

  border-radius: 5px;
  transition: transform 200ms ease-in;
  cursor: pointer;
  font-size: 300%;

  &:hover {
    transform: scale(1.02);
  }
`;

export default AssignSkillsPage;
