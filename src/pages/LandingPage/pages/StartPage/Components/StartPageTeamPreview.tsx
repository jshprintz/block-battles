import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { NUM_OF_WARRIORS_ON_TEAM } from "@/Constants";
import { IWarrior } from "@/types/core";
import { teamDataStore } from "@/server";
import { FlexRow, FlexCol, COLORS } from "@/styles/core/styles";

const StartPageTeamPreview: React.FC = observer(() => {
  const assembledTeam = teamDataStore.assembledTeam;
  const isTeamFull: boolean = assembledTeam.length === NUM_OF_WARRIORS_ON_TEAM;

  const handleRemoveClick = (warriorIndex: number) => {
    teamDataStore.removeWarrior(warriorIndex);
  };

  return (
    <TeamBox>
      <TeamCardContainer>
        {assembledTeam.map((warrior: IWarrior, warriorIndex: number) => {
          const warriorName: string = warrior.name;
          const classType: string = warrior.class;
          const imgPath: string = warrior.imgPath;

          return (
            <TeamCard key={`Warrior-${warrior.name}-${warriorIndex}`}>
              <TeamCardDetails>
                <TeamCardDetailsImg
                  src={imgPath}
                  alt={`${warriorName}-${classType}`}
                />
                <TeamCardDetailsLabel>{classType}</TeamCardDetailsLabel>
              </TeamCardDetails>
              <TeamCardBtnRow>
                <RemoveButton onClick={() => handleRemoveClick(warriorIndex)}>
                  -
                </RemoveButton>
              </TeamCardBtnRow>
            </TeamCard>
          );
        })}
      </TeamCardContainer>

      <AssignSkillsContainer>
        <AssignSkills $isTeamFull={isTeamFull} to="/assign-skills">
          ASSIGN SKILLS
        </AssignSkills>
      </AssignSkillsContainer>
    </TeamBox>
  );
});

const TeamBox = styled(FlexRow)`
  height: 200px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  justify-content: space-between;
`;

const TeamCard = styled(FlexCol)`
  width: 60px;
  height: 95%;
  border: 1px solid white;
  justify-content: space-between;
  border-radius: 5px;
`;

const TeamCardDetails = styled(FlexCol)`
  height: 90%;
  justify-content: space-between;
`;

const TeamCardDetailsImg = styled.img`
  width: 50px;
  margin-top: 5px;
`;

const TeamCardDetailsLabel = styled(FlexRow)`
  height: 15px;
  font-size: 10pt;
  margin-bottom: 5px;
`;

const TeamCardBtnRow = styled(FlexRow)`
  height: 20px;
  justify-content: flex-end;
`;

const RemoveButton = styled(FlexRow)`
  height: 20px;
  width: 20px;
  background-image: ${COLORS.RED_BTN};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    font-size: 150%;
  }
`;

const TeamCardContainer = styled(FlexRow)`
  width: 75%;
  justify-content: space-evenly;
`;

const AssignSkillsContainer = styled(FlexRow)`
  width: 25%;
`;

const AssignSkills = styled(Link)<{ $isTeamFull: boolean }>`
  color: white;
  text-decoration: none;
  height: 50px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: ${(p) => (p.$isTeamFull ? "1" : "0.3")};
  color: white;
  text-decoration: none;
  pointer-events: ${(p) => (p.$isTeamFull ? "auto" : "none")};
  background-image: ${COLORS.GREEN_BTN};
  border-radius: 5px;
  cursor: ${(p) => (p.$isTeamFull ? "pointer" : "not-allowed")};
  &:hover {
    font-size: ${(p) => (p.$isTeamFull ? "150%" : "100%")};
  }
`;

export default StartPageTeamPreview;
export { StartPageTeamPreview };
