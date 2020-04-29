"use strict";
const Collatz = {
  start: 1,
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

while (Collatz.start < Collatz.end) {
  try {
    CountSequence(Collatz.start);
  } catch (counter) {
    if (Collatz.length < counter) {
      Collatz.length = counter;
      Collatz.solution = Collatz.start;
    }
  }
  Collatz.start++;
}

console.log(`Number: ${Collatz.solution} Length: ${Collatz.length}`);
