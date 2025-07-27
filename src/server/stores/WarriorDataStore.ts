import { makeAutoObservable } from "mobx";
import { ISkillTree } from "../../types/core";
import { defaultSkillTreeData } from "../data/defaultSkillTreeData";

export class WarriorDataStore {
  protected defaultData: ISkillTree = defaultSkillTreeData;

  public warriorSkillTreeData: ISkillTree = { ...this.defaultData };

  constructor() {
    makeAutoObservable(this);
  }

  public get warriorSkills(): ISkillTree {
    return this.warriorSkillTreeData;
  }

  // increase skill
  public increaseSkill(skill: keyof ISkillTree): void {
    const current = this.warriorSkillTreeData[skill];
    if (current < 5) {
      this.warriorSkillTreeData[skill]++;
    }
  }

  // decrease skill
  public decreaseSkill(skill: keyof ISkillTree): void {
    const current = this.warriorSkillTreeData[skill];
    if (current > 1) {
      this.warriorSkillTreeData[skill]--;
    }
  }
}
