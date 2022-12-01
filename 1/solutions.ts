import { input } from "./input";

function firstSolution(input: string) {
  let inputArr = input.split("\n");

  let max = 0;
  let elfLoad = 0;

  for (let digits of inputArr) {
    if (digits !== "") {
      elfLoad += +digits;
    } else {
      max = Math.max(elfLoad, max);
      elfLoad = 0;
    }
  }
  return max;
}

console.log("first solution", firstSolution(input));

function secondSolution(input: string) {
  let inputArr = input.split("\n");

  let threeBiggest = [0, 0, 0];
  let elfLoad = 0;

  for (let digits of inputArr) {
    if (digits !== "") {
      elfLoad += +digits;
    } else {
      let smallestOf3 = Math.min(...threeBiggest);
      if (elfLoad > smallestOf3) {
        threeBiggest.splice(
          threeBiggest.findIndex((item) => item === smallestOf3),
          1,
          elfLoad
        );
      }
      elfLoad = 0;
    }
  }
  return threeBiggest.reduce((acc, curr) => (acc += curr));
}

console.log("second solution", secondSolution(input));
