import React, { useState } from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleCreateUser(event) {
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);

    event.target.reset();
    event.target.name.focus();
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form name={name} email={email} onCreateUser={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
