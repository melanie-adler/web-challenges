import CardList from "../CardList/cardList.js";
import Form from "../Form/form.js";
import header from "../Header/header.js";

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(header(), Form(handleFormSubmit), CardList(cards));

  return app;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = {
    question: data.question,
    answer: data.answer,
    tags: data.tags.split(","),
    isBookmarked: false,
  };

  cards.unshift(newCard);

  // To prevent the need to rerender, we add the new card to the DOM directly
  const cardList = document.querySelector(".card-list");
  const newCardElement = Card(newCard);
  cardList.prepend(newCardElement);

  event.target.reset();
  event.target.elements.question.focus();
}
