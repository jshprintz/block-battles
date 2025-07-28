import styled from "styled-components";
import { Menu } from "../../LandingPage/LandingPage";
import { COLORS, FlexRow } from "../../../styles/core/styles";
import { ISkillTree, IWarrior } from "../../../types/core";
import { teamDataStore } from "../../../server/stores/TeamDataStore";
import { observer } from "mobx-react-lite";
import { warriors } from "../../../server/data/warriorData";
import { SKILL_TYPES } from "../../../Constants";

interface IWarriorCardSkillPointsProps {
  currentWarrior: IWarrior;
}

export const WarriorCardSkillPoints: React.FC<IWarriorCardSkillPointsProps> =
  observer(({ currentWarrior }) => {
    const warrior = teamDataStore.assembledTeam.find((warrior) => {
      return warrior.id === currentWarrior.id;
    });

    if (!warrior) {
      console.error("No Warrior Detected");
      return null;
    }

    const originalData = warriors.find((warrior) => {
      return warrior.class === currentWarrior.class;
    });

    if (!originalData) {
      console.error("No Original Data Detected");
      return null;
    }

    const warriorName: string = warrior.name;
    const classType: string = warrior.class;
    const imgPath: string = warrior.imgPath;
    const skillTree = warrior.skillTree;
    const power: number = skillTree.power;
    const accuracy: number = skillTree.accuracy;
    const conditioning: number = skillTree.conditioning;
    const speed: number = skillTree.speed;
    const health: number = skillTree.health;

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
            <ButtonRow>
              <RemoveButton
                onClick={() =>
                  teamDataStore.decreaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.POWER as keyof ISkillTree
                  )
                }
              >
                -
              </RemoveButton>
              <AddButton
                onClick={() =>
                  teamDataStore.increaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.POWER as keyof ISkillTree
                  )
                }
              >
                +
              </AddButton>
              Power: {power}
            </ButtonRow>
          </CardStats>
          <CardStats>
            <ButtonRow>
              <RemoveButton
                onClick={() =>
                  teamDataStore.decreaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.ACCURACY as keyof ISkillTree
                  )
                }
              >
                -
              </RemoveButton>
              <AddButton
                onClick={() =>
                  teamDataStore.increaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.ACCURACY as keyof ISkillTree
                  )
                }
              >
                +
              </AddButton>
              Accuracy: {accuracy}
            </ButtonRow>
          </CardStats>
          <CardStats>
            <ButtonRow>
              <RemoveButton
                onClick={() =>
                  teamDataStore.decreaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.CONDITIONING as keyof ISkillTree
                  )
                }
              >
                -
              </RemoveButton>
              <AddButton
                onClick={() =>
                  teamDataStore.increaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.CONDITIONING as keyof ISkillTree
                  )
                }
              >
                +
              </AddButton>
              Conditioning: {conditioning}
            </ButtonRow>
          </CardStats>
          <CardStats>
            <ButtonRow>
              <RemoveButton
                onClick={() =>
                  teamDataStore.decreaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.SPEED as keyof ISkillTree
                  )
                }
              >
                -
              </RemoveButton>
              <AddButton
                onClick={() =>
                  teamDataStore.increaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.SPEED as keyof ISkillTree
                  )
                }
              >
                +
              </AddButton>
              Speed: {speed}
            </ButtonRow>
          </CardStats>
          <CardStats>
            <ButtonRow>
              <RemoveButton
                onClick={() =>
                  teamDataStore.decreaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.HEALTH as keyof ISkillTree
                  )
                }
              >
                -
              </RemoveButton>
              <AddButton
                onClick={() =>
                  teamDataStore.increaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.HEALTH as keyof ISkillTree
                  )
                }
              >
                +
              </AddButton>
              Health: {health}
            </ButtonRow>
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
