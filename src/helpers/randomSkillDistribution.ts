import {
  MAX_NUM_OF_ASSIGNED_SKILLS,
  NUM_OF_BONUS_SKILL_POINTS,
  NUM_OF_WARRIORS_ON_TEAM,
} from "../Constants";
import { IWarrior } from "../types/core";

const randomSkillDistribution = (
  warriorList: IWarrior[],
  bonusCount: number
): IWarrior[] => {
  while (bonusCount > 0) {
    const randomWarriorIndex = Math.floor(
      Math.random() * NUM_OF_WARRIORS_ON_TEAM
    );
    const warrior: IWarrior = warriorList[randomWarriorIndex];

    const skillKeys = Object.keys(warrior.skillTree);
    const randomSkillKey =
      skillKeys[Math.floor(Math.random() * skillKeys.length)];

    if (warrior.skillTree[randomSkillKey] < MAX_NUM_OF_ASSIGNED_SKILLS) {
      warrior.skillTree[randomSkillKey]++;
      bonusCount--;
    }
  }

  return warriorList;
};

export { randomSkillDistribution };
