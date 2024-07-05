import { createCirle, circleElement } from "./components/Circle/circle.js";
import {
  createPentagon,
  pentagonElement,
} from "./components/Pentagon/pentagon.js";
import { createSquare, squareElement } from "./components/Square/square.js";

console.clear();

const root = document.getElementById("root");

createCirle();
createPentagon();
createSquare();

root.append(circleElement, squareElement, pentagonElement);
