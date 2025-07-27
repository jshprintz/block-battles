interface IWarrior {
  name: string;
  class: string;
  imgPath: string;
  description: string;
  skillTree: ISkillTree;
  traits: {
    dominate: string;
    vulnerable: string;
  };
}

interface ISkillTree {
  power: number;
  accuracy: number;
  conditioning: number;
  speed: number;
  health: number;
}

interface IWarriorList {
  warriorList: IWarrior[];
}

export type { IWarrior, ISkillTree, IWarriorList };
