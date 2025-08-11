import {
  MAX_NUM_OF_ASSIGNED_SKILLS,
  NUM_OF_WARRIORS_ON_TEAM,
} from "../Constants";
import { ISkillTree, IWarrior } from "../types/core";

interface IStoreProps {
  assembledTeam: IWarrior[];
  bonusSkillPointCount: number;
  [key: string]: any;
}

const randomSkillDistribution = (store: IStoreProps) => {
  const warriorList: IWarrior[] = store.assembledTeam;

  while (store.bonusSkillPointCount > 0) {
    const randomWarriorIndex = Math.floor(
      Math.random() * NUM_OF_WARRIORS_ON_TEAM
    );
    const warrior: IWarrior = warriorList[randomWarriorIndex];

    const skillKeys = Object.keys(warrior.skillTree);
    const randomSkillKey =
      skillKeys[Math.floor(Math.random() * skillKeys.length)];

    if (warrior.skillTree[randomSkillKey] < MAX_NUM_OF_ASSIGNED_SKILLS) {
      store.increaseWarriorSkill(
        warrior.id,
        randomSkillKey as keyof ISkillTree
      );
    }
  }

  return warriorList;
};

export { randomSkillDistribution };
