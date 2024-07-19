import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button text="Button" color="red" />
      <Button text="Another Button" color="green" disabled />
      <Button text="Yet another Button" color="blue" />
      <Button text="Fourth Button" color="yellow" />
    </>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button style={{ backgroundColor: color }} disabled={disabled}>
      {text}
    </button>
  );
}
