import styled from "styled-components";
import { SKILL_TYPES } from "@/Constants";
import { teamDataStore } from "@/server/stores/TeamDataStore";
import { FlexRow, COLORS } from "@/styles/core/styles";
import { ISkillTree, IWarrior } from "@/types/core";
import { observer } from "mobx-react-lite";

interface IWarriorCardSkillPointProps {
  id: string;
  skillType: keyof ISkillTree;
}

// TODO: Not quite working yet. Need to implement this into the WarriorCardSkillPoints.tsx
// TODO: having trouble iterating through the object.
const WarriorCardSkillPoint: React.FC<IWarriorCardSkillPointProps> = observer(
  ({ id, skillType }) => {
    const warrior: IWarrior | undefined = teamDataStore.assembledTeam.find(
      (warrior) => {
        return warrior.id === id;
      }
    );

    if (!warrior) {
      return null;
    }

    const value: number = warrior.skillTree[skillType];

    return (
      <CardStats>
        <ButtonRow>
          <RemoveButton
            onClick={() => teamDataStore.decreaseWarriorSkill(id, skillType)}
          >
            -
          </RemoveButton>
          <AddButton
            onClick={() => teamDataStore.increaseWarriorSkill(id, skillType)}
          >
            +
          </AddButton>
          {SKILL_TYPES.POWER.toUpperCase()}: {value}
        </ButtonRow>
      </CardStats>
    );
  }
);

const CardStats = styled.li`
  margin-bottom: 5px;
`;

const ButtonRow = styled(FlexRow)`
  justify-content: flex-start;
`;

const AddButton = styled(FlexRow)`
  width: 20px;
  margin: 5px;
  background-image: ${COLORS.START_BTN};
  border-radius: 50%;
  cursor: pointer;
`;

const RemoveButton = styled(FlexRow)`
  width: 20px;
  margin: 5px;
  background-image: ${COLORS.REMOVE_BTN};
  border-radius: 50%;
  cursor: pointer;
`;

export default WarriorCardSkillPoint;
