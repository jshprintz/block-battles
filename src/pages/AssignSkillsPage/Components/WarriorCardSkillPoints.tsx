import styled from "styled-components";
import { Menu } from "../../LandingPage/LandingPage";
import { COLORS, FlexRow } from "../../../styles/core/styles";
import { IWarrior } from "../../../types/core";
import { teamDataStore } from "../../../server/stores/TeamDataStore";
import { observer } from "mobx-react-lite";

interface IWarriorCardSkillPointsProps {
  currentWarrior: IWarrior;
}

export const WarriorCardSkillPoints: React.FC<IWarriorCardSkillPointsProps> =
  observer(({ currentWarrior }) => {
    const warriorName: string = currentWarrior.name;
    const classType: string = currentWarrior.class;
    const imgPath: string = currentWarrior.imgPath;
    const skillTree = currentWarrior.skillTree;
    const power = skillTree.power;
    const accuracy = skillTree.accuracy;
    const conditioning = skillTree.conditioning;
    const speed = skillTree.speed;
    const health = skillTree.health;
    // Traits are Vuln and Dom
    // const traits = currentWarrior.traits;

    return (
      <SelectionBox>
        <CardHeader>
          <span>{warriorName}</span>
          <span>{classType}</span>
        </CardHeader>
        <CardImage src={imgPath} alt={`${warriorName}-${classType}`} />
        <CardStatsContainer>
          <CardStats>
            <AddButtonRow>
              <AddButton>+</AddButton>Power: {power}
            </AddButtonRow>
          </CardStats>
          <CardStats>
            <AddButtonRow>
              <AddButton>+</AddButton>Accuracy: {accuracy}
            </AddButtonRow>
          </CardStats>
          <CardStats>
            <AddButtonRow>
              <AddButton>+</AddButton>Conditioning: {conditioning}
            </AddButtonRow>
          </CardStats>
          <CardStats>
            <AddButtonRow>
              <AddButton>+</AddButton>Speed: {speed}
            </AddButtonRow>
          </CardStats>
          <CardStats>
            <AddButtonRow>
              <AddButton>+</AddButton>Health: {health}
            </AddButtonRow>
          </CardStats>
        </CardStatsContainer>
      </SelectionBox>
    );
  });

const SelectionBox = styled(Menu)`
  justify-content: space-between;
  border: 2px solid white;
  width: 400px;
  height: auto;

  margin: 5px;
`;

const CardHeader = styled(FlexRow)`
  height: 40px;
  font-size: 125%;
  padding: 5px;
  justify-content: space-between;
  border-bottom: 2px solid white;
  user-select: none;
`;

const CardImage = styled.img`
  height: 200px;
  width: 200px;
  margin-top: 10px;
  border-radius: 5px;
`;

const CardStatsContainer = styled.ul`
  height: auto;
  width: 100%;
  font-size: 110%;
  list-style: none;
  user-select: none;
`;

const CardStats = styled.li`
  margin-bottom: 5px;
`;

const AddButtonRow = styled(FlexRow)`
  justify-content: flex-start;
`;

const AddButton = styled(FlexRow)`
  width: 20px;
  margin: 5px;
  background-image: ${COLORS.START_BTN};
  border-radius: 50%;
  cursor: pointer;
`;
