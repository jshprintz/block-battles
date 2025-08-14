interface IWarrior {
  name: string;
  id: string;
  class: string;
  imgPath: string;
  iconPath: string;
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
