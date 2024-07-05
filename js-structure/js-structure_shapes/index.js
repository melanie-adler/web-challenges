import { createCirle } from "./components/Circle/circle.js";
import { createPentagon } from "./components/Pentagon/pentagon.js";
import { createSquare } from "./components/Square/square.js";

console.clear();

const root = document.getElementById("root");

const circle = createCirle();
const square = createSquare();
const pentagon = createPentagon();

root.append(circle, square, pentagon);
