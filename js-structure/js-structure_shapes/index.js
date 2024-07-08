import { createCirle } from "./components/Circle/circle.js";
import { createPentagon } from "./components/Pentagon/pentagon.js";
import { createSquare } from "./components/Square/square.js";

console.clear();

const root = document.getElementById("root");

root.append(createCirle(), createSquare(), createPentagon());
