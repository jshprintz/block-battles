import { observer } from "mobx-react-lite";
import { IWarrior } from "@/types/core";
import { warriors } from "@/server";
import {
  CardContainer,
  CardHeader,
  CardImage,
  CardBody,
  CardStatsContainer,
  CardStats,
  CardTraitsContainer,
  DomTrait,
  CardIcon,
  VulnTrait,
} from "@/styles";

interface IWarriorCodeProps {
  currentWarrior: IWarrior;
}

const WarriorCard: React.FC<IWarriorCodeProps> = observer(
  ({ currentWarrior }) => {
    const warriorName: string = currentWarrior.name;
    const classType: string = currentWarrior.class;
    const imgPath: string = currentWarrior.imgPath;
    const iconPath: string = currentWarrior.iconPath;
    const skillTree = currentWarrior.skillTree;
    const power = skillTree.power;
    const accuracy = skillTree.accuracy;
    const conditioning = skillTree.conditioning;
    const speed = skillTree.speed;
    const health = skillTree.health;
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
      </CardContainer>
    );
  }
);

export default WarriorCard;
export { WarriorCard };
