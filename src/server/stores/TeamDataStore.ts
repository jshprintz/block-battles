import { makeAutoObservable } from "mobx";
import { IWarrior } from "../../types/core";
import {
  NUM_OF_BONUS_SKILL_POINTS,
  NUM_OF_WARRIORS_ON_TEAM,
} from "../../Constants";

export class TeamDataStore {
  protected warriorList: IWarrior[] = [];

  protected bonusSkillPoints: number = NUM_OF_BONUS_SKILL_POINTS;

  constructor() {
    makeAutoObservable(this);
  }

  // Adds warrior to user assembled list
  addWarrior(selectedWarrior: IWarrior) {
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

  // Sets the count to the passed value.
  public set bonusSkillPointCount(bonusSkillPoints: number) {
    this.bonusSkillPointCount = bonusSkillPoints;
  }
}

// Create a singleton instance
export const teamDataStore = new TeamDataStore();
