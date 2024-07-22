import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click this!</Button>
      <Button>Click that!</Button>
      <Button>Click me!</Button>
      <Button>Click not!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
