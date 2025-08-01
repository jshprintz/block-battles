import styled from "styled-components";
import { Menu } from "../../LandingPage/LandingPage";
import { COLORS, FlexRow } from "../../../styles/core/styles";
import { ISkillTree, IWarrior } from "../../../types/core";
import { teamDataStore } from "../../../server/stores/TeamDataStore";
import { observer } from "mobx-react-lite";
import { warriors } from "../../../server/data/warriorData";
import { MAX_NUM_OF_ASSIGNED_SKILLS, SKILL_TYPES } from "../../../Constants";

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

    // Original Stats
    const origSkillTree: ISkillTree = originalData.skillTree;
    const origPower: number = origSkillTree.power;
    const origAccuracy: number = origSkillTree.accuracy;
    const origConditioning: number = origSkillTree.conditioning;
    const origSpeed: number = origSkillTree.speed;
    const origHealth: number = origSkillTree.health;

    const warriorName: string = warrior.name;
    const classType: string = warrior.class;
    const imgPath: string = warrior.imgPath;
    const skillTree = warrior.skillTree;

    const numAvailSkills: number = teamDataStore.bonusSkillPointCount;
    const hasAvailSkills: boolean = numAvailSkills > 0;
    // Current Stats
    const power: number = skillTree.power;
    const accuracy: number = skillTree.accuracy;
    const conditioning: number = skillTree.conditioning;
    const speed: number = skillTree.speed;
    const health: number = skillTree.health;

    // Can add skills?
    const canAddPower: boolean =
      power < MAX_NUM_OF_ASSIGNED_SKILLS && hasAvailSkills;
    const canAddAccuracy: boolean =
      accuracy < MAX_NUM_OF_ASSIGNED_SKILLS && hasAvailSkills;
    const canAddConditioning: boolean =
      conditioning < MAX_NUM_OF_ASSIGNED_SKILLS && hasAvailSkills;
    const canAddSpeed: boolean =
      speed < MAX_NUM_OF_ASSIGNED_SKILLS && hasAvailSkills;
    const canAddHealth: boolean =
      health < MAX_NUM_OF_ASSIGNED_SKILLS && hasAvailSkills;

    // Can subtract skills?
    const canSubtractPower: boolean = power > origPower;
    const canSubtractAccuracy: boolean = accuracy > origAccuracy;
    const canSubtractConditioning: boolean = conditioning > origConditioning;
    const canSubtractSpeed: boolean = speed > origSpeed;
    const canSubtractHealth: boolean = health > origHealth;

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
                $isActive={canSubtractPower}
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
                $isActive={canAddPower}
                onClick={() =>
                  teamDataStore.increaseWarriorSkill(
                    currentWarrior.id,
                    SKILL_TYPES.POWER as keyof ISkillTree
                  )
                }
              >
                +
              </AddButton>
              {SKILL_TYPES.POWER.toUpperCase()}: {power}
            </ButtonRow>
          </CardStats>
          <CardStats>
            <ButtonRow>
              <RemoveButton
                $isActive={canSubtractAccuracy}
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
                $isActive={canAddAccuracy}
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
                $isActive={canSubtractConditioning}
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
                $isActive={canAddConditioning}
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
                $isActive={canSubtractSpeed}
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
                $isActive={canAddSpeed}
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
                $isActive={canSubtractHealth}
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
                $isActive={canAddHealth}
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

const AddButton = styled(FlexRow)<{ $isActive: boolean }>`
  width: 20px;
  margin: 5px;
  background-image: ${COLORS.START_BTN};
  border-radius: 50%;
  cursor: ${(p) => (p.$isActive ? "pointer" : "not-allowed")};
  opacity: ${(p) => (p.$isActive ? 1 : 0.3)};
`;

const RemoveButton = styled(FlexRow)<{ $isActive: boolean }>`
  width: 20px;
  margin: 5px;
  background-image: ${COLORS.REMOVE_BTN};
  border-radius: 50%;
  cursor: pointer;
  cursor: ${(p) => (p.$isActive ? "pointer" : "not-allowed")};
  opacity: ${(p) => (p.$isActive ? 1 : 0.3)};
`;
