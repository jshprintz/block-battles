import { makeAutoObservable } from "mobx";
import { IWarrior } from "../../types/core";

export class TeamDataStore {
  protected warriorList: IWarrior[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addWarrior() {
    console.log("Add Warrior");
  }

  removeWarrior() {
    console.log("Remove Warrior");
  }

  public get assembledTeam(): IWarrior[] {
    return this.warriorList ?? [];
  }
}

// Create a singleton instance
export const teamDataStore = new TeamDataStore();
