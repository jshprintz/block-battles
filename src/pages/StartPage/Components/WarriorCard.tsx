import styled from "styled-components";
import { Menu } from "../../LandingPage/LandingPage";
import { COLORS, FlexRow } from "../../../styles/core/styles";
import { ISkillTree, IWarrior } from "../../../types/core";
import { teamDataStore } from "../../../server/stores/TeamDataStore";
import { observer } from "mobx-react-lite";

interface IWarriorCodeProps {
  currentWarrior: IWarrior;
}

export const WarriorCard: React.FC<IWarriorCodeProps> = observer(
  ({ currentWarrior }) => {
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

    // When I add to the list, I have to have a way to add the store with it.
    const handleAddClick = () => {
      const current = currentWarrior;
      current.id = crypto.randomUUID();
      teamDataStore.addWarrior(current);
    };

    return (
      <SelectionBox>
        <CardHeader>
          <span>{warriorName}</span>
          <span>{classType}</span>
        </CardHeader>
        <CardImage src={imgPath} alt={`${warriorName}-${classType}`} />
        <CardStatsContainer>
          <CardStats>Power: {power}</CardStats>
          <CardStats>Accuracy: {accuracy}</CardStats>
          <CardStats>Conditioning: {conditioning}</CardStats>
          <CardStats>Speed: {speed}</CardStats>
          <CardStats>Health: {health}</CardStats>
        </CardStatsContainer>
        <AddButtonContainer>
          <AddButton onClick={handleAddClick}>+</AddButton>
        </AddButtonContainer>
      </SelectionBox>
    );
  }
);

const SelectionBox = styled(Menu)`
  justify-content: space-between;
  border: 2px solid white;
  width: 400px;
  height: auto;
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

const AddButtonContainer = styled(FlexRow)`
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  padding-right: 5px;
  padding-bottom: 5px;
`;

const AddButton = styled(FlexRow)`
  height: 40px;
  width: 40px;
  background-image: ${COLORS.START_BTN};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    font-size: 150%;
  }
`;
