import { input } from "./input";

function inputToArray(input: string) {
  return input.split("\n");
}

const pointsLookup = {
  21: 6,
  23: 3,
  24: 6,
  22: 0,
  25: 0,
};

type PointsLookup = keyof typeof pointsLookup;

function calculateScore(match: string) {
  let score = 0;

  let difference = match.charCodeAt(2) - match.charCodeAt(0);

  console.log(difference, match[0], match[2]);

  score += pointsLookup[difference as PointsLookup];

  switch (match[2]) {
    case "X": {
      score += 1;
      break;
    }
    case "Y": {
      score += 2;
      break;
    }

    case "Z": {
      score += 3;
      break;
    }
  }

  return score;
}

function firstSolution(input: string): number {
  return inputToArray(input).reduce(
    (acc, curr) => (acc += calculateScore(curr)),
    0
  );
}

// Second - first mod 1 => second wins
// Second - first mod 2 => second loses
// Second - first mod 0 => draw
const opponentMap = {
  A: 1,
  B: 2,
  C: 3,
};

type OpponentMap = keyof typeof opponentMap;

function outcomeToChoice(str: string) {
  let opp = str[0];
  if (!Object.keys(opponentMap).includes(opp)) {
    console.log("wrong key");
    return -1;
  }

  let me = str[2];

  let score = 0;
  let temp = 0;
  // I need to lose
  if (me === "X") {
    temp = opponentMap[opp as OpponentMap] - 1;
    if (temp === 0) temp = 3;
    score += temp;
  }

  // I need to draw
  if (me === "Y") {
    temp = opponentMap[opp as OpponentMap];
    score += temp + 3;
  }

  // I need to win
  if (me === "Z") {
    temp = opponentMap[opp as OpponentMap] + 1;
    if (temp === 4) temp = 1;
    score += temp + 6;
  }
  return score;
}

function secondSolution(input: string) {
  return inputToArray(input).reduce(
    (acc, curr) => (acc += outcomeToChoice(curr)),
    0
  );
}

console.log(secondSolution(input));
