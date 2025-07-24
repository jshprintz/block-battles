import styled from "styled-components";
import { FlexRow, FlexCol } from "../../../styles/core/styles";
import { IWarrior } from "../../../types/core";

interface ITeamPreviewProps {
  assembledTeam: IWarrior[];
}

export const TeamPreview: React.FC<ITeamPreviewProps> = ({ assembledTeam }) => {
  return (
    <TeamBox>
      {assembledTeam.map((warrior) => {
        const warriorName: string = warrior.name;
        const classType: string = warrior.class;

        return (
          <TeamCard>
            <div>{warriorName}</div>
            <div>{classType}</div>
          </TeamCard>
        );
      })}
    </TeamBox>
  );
};

const TeamBox = styled(FlexRow)`
  height: 200px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  justify-content: space-evenly;
`;

const TeamCard = styled(FlexCol)`
  width: 15%;
  height: 95%;
  border: 1px solid white;
  justify-content: space-around;
  border-radius: 5px;
`;
