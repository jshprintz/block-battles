import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { teamDataStore } from "@/server";
import { FlexRow, FlexCol } from "@/styles/core/styles";
import { IWarrior } from "@/types/core";

export const BattleLobbyTeamPreview: React.FC = observer(() => {
  const assembledTeam = teamDataStore.assembledTeam;

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
            </TeamCard>
          );
        })}
      </TeamCardContainer>
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
  width: 120px;
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
  width: 110px;
  margin-top: 5px;
`;

const TeamCardDetailsLabel = styled(FlexRow)`
  height: 15px;
  font-size: 10pt;
  margin-bottom: 5px;
`;

const TeamCardContainer = styled(FlexRow)`
  width: 100%;
  justify-content: space-evenly;
`;
