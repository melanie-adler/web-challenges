import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World Article</h1>
      <p>This is text in an article.</p>
      <p>This is more text in another article.</p>
    </article>
  );
}
