"use strict";
const Collatz = {
  start: 700000,
  end: 1000000,
  solution: 0,
  length: 0,
};

function CountSequence(number, counter = 1) {
  if (number % 2 == 0 && number != 1) {
    counter++;
    return CountSequence(number / 2, counter);
  } else if (number != 1) {
    counter++;
    return CountSequence(number * 3 + 1, counter);
  } else {
    throw counter;
  }
}

var number = Collatz.start;
while (number < Collatz.end) {
  try {
    CountSequence(number);
  } catch (counter) {
    if (Collatz.length < counter) {
      Collatz.length = counter;
      Collatz.solution = Collatz.start;
    }
  }
  number++;
}

console.log(Collatz.solution);
