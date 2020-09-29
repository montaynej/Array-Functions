var personnel = [
  {
    id: 5,
    name: "Luke 		Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//Our objective: get the total score of force users only. Let’s do it step by step!

//First, we need to filter out the personnel who can’t use the force:

//With that we have 3 elements left in our resulting array. We now need to create an array containing the total score of each Jedi. (using Map)

//And let’s use reduce to get the total:
