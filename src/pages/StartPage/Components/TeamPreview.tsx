import styled from "styled-components";
import { FlexRow, FlexCol, COLORS } from "../../../styles/core/styles";
import { IWarrior } from "../../../types/core";
import { teamDataStore } from "../../../server/stores/TeamDataStore";
import { observer } from "mobx-react-lite";

export const TeamPreview: React.FC = observer(() => {
  const assembledTeam = teamDataStore.assembledTeam;

  const handleRemoveClick = (warriorIndex: number) => {
    teamDataStore.removeWarrior(warriorIndex);
  };

  return (
    <TeamBox>
      {assembledTeam.map((warrior: IWarrior, warriorIndex: number) => {
        const warriorName: string = warrior.name;
        const classType: string = warrior.class;

        return (
          <TeamCard key={`Warrior-${warrior.name}-${warriorIndex}`}>
            <TeamCardDetails>
              <div>{warriorName}</div>
              <div>{classType}</div>
            </TeamCardDetails>
            <TeamCardBtnRow>
              <RemoveButton onClick={() => handleRemoveClick(warriorIndex)}>
                -
              </RemoveButton>
            </TeamCardBtnRow>
          </TeamCard>
        );
      })}
    </TeamBox>
  );
});

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
  justify-content: space-between;
  border-radius: 5px;
`;

const TeamCardDetails = styled(FlexCol)`
  height: 90%;
  justify-content: space-around;
`;

const TeamCardBtnRow = styled(FlexRow)`
  height: 20px;
  justify-content: flex-end;
`;

const RemoveButton = styled(FlexRow)`
  height: 20px;
  width: 20px;
  background-image: ${COLORS.REMOVE_BTN};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    font-size: 150%;
  }
`;
