interface IWarrior {
  class: string;
  skillTree: {
    power: number;
    accuracy: number;
    conditioning: number;
    speed: number;
    health: number;
  };
  traits: {
    dominate: string;
    vulnerable: string;
  };
}

interface IWarriorList {
  warriorList: IWarrior[];
}

export type { IWarrior, IWarriorList };
