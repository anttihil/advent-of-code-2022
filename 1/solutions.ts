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

  let threeBiggestLoads = [0, 0, 0];
  let newLoad = 0;

  for (let digits of inputArr) {
    if (digits !== "") {
      newLoad += +digits;
    } else {
      threeBiggestLoads.push(newLoad);
      threeBiggestLoads.sort((a, b) => a - b).shift();
      newLoad = 0;
    }
  }
  return threeBiggestLoads.reduce((acc, curr) => (acc += curr));
}

console.log("second solution", secondSolution(input));
