import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked a button!");
  }

  return (
    <>
      <Button text="Button" color="red" onClick={handleClick} />
      <Button
        text="Another Button"
        color="green"
        onClick={handleClick}
        disabled
      />
      <Button text="Yet another Button" color="blue" onClick={handleClick} />
      <Button text="Fourth Button" color="yellow" onClick={handleClick} />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
