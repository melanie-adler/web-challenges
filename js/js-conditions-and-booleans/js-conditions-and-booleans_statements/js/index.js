console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("Even", number);
} else {
  console.log("Odd", number);
}

// Part 3: Hotdogs
const numberOfHotdogs = 10000000;

if (numberOfHotdogs < 5) {
  console.log("2€");
} else if (numberOfHotdogs < 100) {
  console.log("1,50€");
} else if (numberOfHotdogs < 1000000) {
  console.log("1€");
} else {
  console.log("0,10€");
}

// Part 4: Daytime
const currentHour = 16;

const statement = currentHour < 17 ? "Still need to learn.." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coach = "Nick";

const greeting = "Hello " + (userName === coach ? "Coach" : userName) + "!";

console.log(greeting);
