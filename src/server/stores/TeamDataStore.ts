import { makeAutoObservable } from "mobx";
import { IWarrior } from "../../types/core";
import { NUM_OF_WARRIORS_ON_TEAM } from "../../Constants";

export class TeamDataStore {
  protected warriorList: IWarrior[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addWarrior(selectedWarrior: IWarrior) {
    if (this.warriorList.length === NUM_OF_WARRIORS_ON_TEAM) {
      console.log("Cannot Add Warrior. Already at", NUM_OF_WARRIORS_ON_TEAM);
    } else {
      this.warriorList.push(selectedWarrior);
    }
  }

  removeWarrior(warriorIndex: number) {
    this.warriorList.splice(warriorIndex, 1);
  }

  public get assembledTeam(): IWarrior[] {
    return this.warriorList ?? [];
  }
}

// Create a singleton instance
export const teamDataStore = new TeamDataStore();
