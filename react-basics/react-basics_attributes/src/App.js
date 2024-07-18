import React from "react";
import "./styles.css";

export default function App() {
  return <NewArticle />;
}

function NewArticle() {
  return (
    <article className="article">
      <h2 className="article__title">
        The one thing I desperately need to know about you
      </h2>
      <form className="secrets-form">
        <label htmlFor="new-input">
          What is your favourite chrome extension?
        </label>
        <input
          onSubmit={clearField}
          id="new-input"
          placeholder="Enter your fave here..."
          className="secrets-input"
        ></input>
        <button type="submit" className="secrets-button">
          Share the secret!
        </button>
      </form>
      <a
        className="article__link"
        href="https://y.yarn.co/f58b8fce-7d08-4430-9781-5525a5ff00a0_text.gif"
        target="blank"
      >
        Now check out mine!
      </a>
    </article>
  );
}

function clearField(event) {
  event.target.value = "";
}
