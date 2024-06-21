console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

const now = new Date();
const currentHour = now.getHours();

const getCurrentHour = (currentHour) => {
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};
console.log(getCurrentHour(currentHour));

const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};

console.log(getVectorLength(1, 2, 3));

const cleanInput = (string) => {
  return string.toLowerCase().trim();
};

console.log(cleanInput("HIDE"));

/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

console.log(isOddAndSmall(7));

function add3(a, b, c) {
  return a + b + c;
}

console.log(add3(2, 4, 6));

function repeat10(string) {
  return string.repeat(10);
}

console.log(repeat10("repeat"));
