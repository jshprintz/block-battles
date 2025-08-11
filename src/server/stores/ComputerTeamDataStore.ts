import { makeAutoObservable } from "mobx";
import { ISkillTree, IWarrior } from "../../types/core";
import {
  MAX_NUM_OF_ASSIGNED_SKILLS,
  NUM_OF_BONUS_SKILL_POINTS,
  NUM_OF_WARRIORS_ON_TEAM,
} from "../../Constants";
import { action } from "mobx";
import { warriors } from "../data/warriorData";

export class ComputerTeamDataStore {
  protected warriorList: IWarrior[] = [];

  protected bonusSkillPoints: number = NUM_OF_BONUS_SKILL_POINTS;

  constructor() {
    makeAutoObservable(this, {
      addWarrior: action,
      removeWarrior: action,
      addSkillPoint: action,
      removeSkillPoint: action,
      bonusSkillPointCount: false,
      increaseWarriorSkill: action,
    });
  }

  // Adds warrior to user assembled list
  addWarrior(selectedWarrior: IWarrior) {
    console.log("warrior list", this.warriorList, this.warriorList.length);
    console.log("NUM_OF_WARRIORS_ON_TEAM", NUM_OF_WARRIORS_ON_TEAM);

    if (this.warriorList.length === NUM_OF_WARRIORS_ON_TEAM) {
      console.log("Cannot Add Warrior. Already at", NUM_OF_WARRIORS_ON_TEAM);
    } else {
      this.warriorList.push(selectedWarrior);
    }
  }

  // Removes warrior from user assembled list
  removeWarrior(warriorIndex: number) {
    this.warriorList.splice(warriorIndex, 1);
  }

  // Increase skill point total
  addSkillPoint() {
    if (this.bonusSkillPointCount === NUM_OF_BONUS_SKILL_POINTS) {
      return null;
    }
    return this.bonusSkillPointCount++;
  }

  // Decrease skill point total
  removeSkillPoint() {
    if (this.bonusSkillPointCount === 0) {
      return null;
    }
    return this.bonusSkillPointCount--;
  }

  // Retrieves the assembled warrior list
  public get assembledTeam(): IWarrior[] {
    return this.warriorList ?? [];
  }

  // Retrieves the number of bonus skill points available
  public get bonusSkillPointCount(): number {
    return this.bonusSkillPoints;
  }

  // Sets the number of bonus skill points that are available
  public set bonusSkillPointCount(bonusSkillPoints: number) {
    this.bonusSkillPoints = bonusSkillPoints;
  }

  @action
  increaseWarriorSkill(warriorIndex: string, skill: keyof ISkillTree) {
    const warrior = this.warriorList.find((w) => w.id === warriorIndex);
    if (!warrior) return;

    const currentValue = warrior.skillTree[skill];
    const hasAvailSkillPoints = this.bonusSkillPointCount > 0;

    if (currentValue < MAX_NUM_OF_ASSIGNED_SKILLS && hasAvailSkillPoints) {
      warrior.skillTree[skill]++;
      this.bonusSkillPointCount--;
    }
  }

  @action
  decreaseWarriorSkill(warriorIndex: string, skill: keyof ISkillTree) {
    const warrior = this.warriorList.find((w) => w.id === warriorIndex);
    if (!warrior) return;

    const originalWarrior = warriors.find((w) => w.id === warrior.id);
    if (!originalWarrior) return;

    const currentValue = warrior.skillTree[skill];
    const originalValue = originalWarrior.skillTree[skill];
    const isAtMaxPoints =
      this.bonusSkillPointCount === NUM_OF_BONUS_SKILL_POINTS;

    // Prevent decreasing below original value
    if (currentValue > originalValue && !isAtMaxPoints) {
      warrior.skillTree[skill]--;
      this.bonusSkillPointCount++;
    }
  }
}

// Create a singleton instance
export const computerTeamDataStore = new ComputerTeamDataStore();
