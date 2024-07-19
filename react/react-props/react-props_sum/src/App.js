import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Sum valueA={1} valueB={5} />
      <Sum valueA={7} valueB={89} />
    </>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}
