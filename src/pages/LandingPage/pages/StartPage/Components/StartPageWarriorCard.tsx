import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { teamDataStore, warriors } from "@/server";
import { FlexRow, COLORS, FlexCol } from "@/styles/core/styles";
import { ISkillTree, IWarrior } from "@/types/core";

interface IStartPageWarriorCardProps {
  currentWarrior: IWarrior;
}

const StartPageWarriorCard: React.FC<IStartPageWarriorCardProps> = observer(
  ({ currentWarrior }) => {
    const warriorName: string = currentWarrior.name;
    const classType: string = currentWarrior.class;
    const imgPath: string = currentWarrior.imgPath;
    const iconPath: string = currentWarrior.iconPath;
    const skillTree: ISkillTree = currentWarrior.skillTree;
    const power: number = skillTree.power;
    const accuracy: number = skillTree.accuracy;
    const conditioning: number = skillTree.conditioning;
    const speed: number = skillTree.speed;
    const health: number = skillTree.health;
    // Traits are Vuln and Dom
    const traits = currentWarrior.traits;
    const vuln: string = traits.vulnerable;
    const vulnWarrior: IWarrior | undefined = warriors.find((warrior) => {
      return warrior.class === vuln;
    });
    const vulnIconPath: string = vulnWarrior ? vulnWarrior.iconPath : "";
    const dom: string = traits.dominate;
    const domWarrior: IWarrior | undefined = warriors.find((warrior) => {
      return warrior.class === dom;
    });
    const domIconPath: string = domWarrior ? domWarrior.iconPath : "";

    const handleAddClick = () => {
      const current = currentWarrior;
      current.id = crypto.randomUUID();
      teamDataStore.addWarrior(current);
    };

    return (
      <CardContainer>
        <CardHeader>
          <span>{warriorName}</span>
          <span>
            {classType}
            <CardIcon src={iconPath} alt={classType} />
          </span>
        </CardHeader>
        <CardImage src={imgPath} alt={`${warriorName}-${classType}`} />
        <CardBody>
          <CardStatsContainer>
            <CardStats>Power: {power}</CardStats>
            <CardStats>Accuracy: {accuracy}</CardStats>
            <CardStats>Conditioning: {conditioning}</CardStats>
            <CardStats>Speed: {speed}</CardStats>
            <CardStats>Health: {health}</CardStats>
          </CardStatsContainer>
          <CardTraitsContainer>
            <DomTrait>
              <CardIcon src={domIconPath} alt={dom} />
            </DomTrait>
            <VulnTrait>
              <CardIcon src={vulnIconPath} alt={vuln} />
            </VulnTrait>
          </CardTraitsContainer>
        </CardBody>
        <AddButtonContainer>
          <AddButton onClick={handleAddClick}>ADD</AddButton>
        </AddButtonContainer>
      </CardContainer>
    );
  }
);

const CardContainer = styled(FlexCol)`
  justify-content: space-between;
  border: 2px solid white;
  border-radius: 5px;
  width: 250px;
  height: auto;
  user-select: none;
`;

const CardHeader = styled(FlexRow)`
  height: 40px;
  font-size: 125%;
  padding: 5px;
  justify-content: space-between;
  border-bottom: 2px solid white;
  user-select: none;
`;

const CardIcon = styled.img`
  height: 20px;
  margin-left: 2px;
`;

const CardImage = styled.img`
  height: 200px;
  width: 200px;
  margin-top: 10px;
  border-radius: 5px;
`;

const CardBody = styled(FlexRow)`
  height: auto;
  width: 100%;
  justify-content: space-between;
`;

const CardStatsContainer = styled.ul`
  height: auto;
  width: 50%;
  font-size: 110%;
  list-style: none;
  user-select: none;
  padding: 5px;
  margin-left: 5px;
`;

const CardTraitsContainer = styled(FlexCol)`
  height: 100px;
  width: 50%;
  justify-content: space-around;
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
  background-image: ${COLORS.GREEN_BTN};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    font-size: 150%;
  }
`;

const TraitClass = styled(FlexRow)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  user-select: none;
`;

const DomTrait = styled(TraitClass)`
  background-image: ${COLORS.RED_BTN};
`;

const VulnTrait = styled(TraitClass)`
  background-image: ${COLORS.BLUE_BTN};
`;

export default StartPageWarriorCard;
export { StartPageWarriorCard };
