import styled from "styled-components";
import { COLORS, FlexCol, FlexRow } from "@/styles/core/styles";
import { IWarrior } from "@/types/core";
import { teamDataStore } from "@/server/stores/TeamDataStore";
import { WarriorCardSkillPoints } from "./Components/WarriorCardSkillPoints";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { deviceStore } from "@/server";

const AssignSkillsPage = observer(() => {
  const isMobile: boolean = deviceStore.isMobile;
  const assembledTeam: IWarrior[] = teamDataStore.assembledTeam;
  const availableSkillPoints: number = teamDataStore.bonusSkillPointCount;
  const isLastSkill: boolean = availableSkillPoints === 1;
  const isNoSkills: boolean = availableSkillPoints === 0;

  return (
    <Container>
      <AssignSkillsPageContainer>
        <HeaderContainer $isMobile={isMobile}>
          {isLastSkill ? (
            <h1>ONE MORE!</h1>
          ) : isNoSkills ? (
            <FlexRow>
              <h1>LET'S</h1>
              <BattleButton to={"/battle-lobby"}>GO!</BattleButton>
            </FlexRow>
          ) : (
            <h1>{availableSkillPoints} SKILLS</h1>
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

const HeaderContainer = styled(FlexCol)<{ $isMobile: boolean }>`
  height: ${(p) => (p.$isMobile ? "10%" : "15%")};
  text-align: center;
  font-size: ${(p) => (p.$isMobile ? "200%" : "300%")};
`;

const BattleButton = styled(Link)`
  width: auto;
  padding: 0px 15px;
  margin: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  text-decoration: none;

  border-radius: 5px;
  transition: transform 200ms ease-in;
  cursor: pointer;
  font-size: 200%;

  background: ${COLORS.GREEN_BTN};

  &:hover {
    transform: scale(1.02);
  }
`;

export default AssignSkillsPage;
export { AssignSkillsPage };
