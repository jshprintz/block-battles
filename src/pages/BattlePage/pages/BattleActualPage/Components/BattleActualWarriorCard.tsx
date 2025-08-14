import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { FlexRow, FlexCol } from "@/styles/core/styles";
import { IWarrior } from "@/types/core";

interface IWarriorCodeProps {
  currentWarrior: IWarrior;
}

const BattleActualWarriorCard: React.FC<IWarriorCodeProps> = observer(
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

    return (
      <CardContainer>
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
      </CardContainer>
    );
  }
);

const Menu = styled(FlexCol)`
  height: 50%;
  width: 75%;
  justify-content: space-evenly;
  border-radius: 5px;
`;

const CardContainer = styled(Menu)`
  justify-content: space-between;
  border: 2px solid white;
  width: 250px;
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

export default BattleActualWarriorCard;
export { BattleActualWarriorCard };
