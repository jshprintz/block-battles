const warriors = [
  {
    name: "Bryan",
    class: "Brute",
    description:
      "Lives by one rule: punch first, ask questions never. Doors don't open—they get destroyed. Can't read, but reading's for nerds.",
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
    description:
      "He can't pick up a gallon of milk, but he can throw a dart piss drunk at 8 am and get relatively close to the board.",
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
