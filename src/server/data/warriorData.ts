const warriors = [
  {
    name: "Bryan",
    class: "Brute",
    imgPath: "/block-battles/assets/images/warriors/BryanBrute.png",
    description:
      "Lives by one rule: punch first, ask questions never. Can't read, but reading's for nerds. You're a nerd for reading this far.",
    skillTree: {
      power: 3,
      accuracy: 1,
      conditioning: 1,
      speed: 1,
      health: 3,
    },
    traits: {
      dominate: "Healer",
      vulnerable: "Assassin",
    },
  },
  {
    name: "Wally",
    class: "Wizard",
    imgPath: "/block-battles/assets/images/warriors/WallyWizard.png",
    description:
      "Speaks fluent gibberish and wears his bathrobe 24/7, this Wizard has the power to creep out all the girls at the bar.",
    skillTree: {
      power: 1,
      accuracy: 1,
      conditioning: 1,
      speed: 3,
      health: 3,
    },
    traits: {
      dominate: "Tank",
      vulnerable: "Healer",
    },
  },
  {
    name: "Henrietta",
    class: "Healer",
    imgPath: "/block-battles/assets/images/warriors/HenriettaHealer.png",
    description:
      "Powered with Italian mother level of passive aggression, this Healer will never let you forget that one time they helped you.",
    skillTree: {
      power: 1,
      accuracy: 1,
      conditioning: 1,
      speed: 1,
      health: 5,
    },
    traits: {
      dominate: "Wizard",
      vulnerable: "Brute",
    },
  },
  {
    name: "Ashley",
    class: "Assassin",
    imgPath: "/block-battles/assets/images/warriors/AshleyAssassin.png",
    description:
      "She can't pick up a gallon of milk, but she can throw a dart piss drunk on mimosas at 8 am and get relatively close to the board.",
    skillTree: {
      power: 1,
      accuracy: 3,
      conditioning: 1,
      speed: 1,
      health: 3,
    },
    traits: {
      dominate: "Brute",
      vulnerable: "Tank",
    },
  },
  {
    name: "Tommy",
    class: "Tank",
    imgPath: "/block-battles/assets/images/warriors/TommyTank.png",
    description:
      "Oddly compassionate to the point where it's weird, this Tank will protect your skills, but will talk a lot about their problems.",
    skillTree: {
      power: 1,
      accuracy: 1,
      conditioning: 3,
      speed: 1,
      health: 3,
    },
    traits: {
      dominate: "Assassin",
      vulnerable: "Wizard",
    },
  },
];

export { warriors };
