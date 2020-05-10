"use strict";
const Collatz = {
  start: 1,
  end: 1000000,
  solution: 0,
  length: 0,
};

function CountSequence(number, steps = 1) {
  steps++;
  if (number % 2 == 0 && number != 1) {
    return CountSequence(number / 2, steps);
  } else if (number != 1) {
    return CountSequence(number * 3 + 1, steps);
  } else {
    throw steps;
  }
}

while (Collatz.start < Collatz.end) {
  try {
    CountSequence(Collatz.start);
  } catch (steps) {
    if (Collatz.length < steps) {
      Collatz.length = steps;
      Collatz.solution = Collatz.start;
    }
  }
  Collatz.start++;
}

console.log(`Number: ${Collatz.solution} Length: ${Collatz.length}`);
