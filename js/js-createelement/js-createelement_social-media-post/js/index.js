console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newArticle = document.createElement("article");
newArticle.classList.add("post");

const newParagraph = document.createElement("p");
newParagraph.textContent =
  "I made a new social media post. Would you look at that! Whoop Whoop!";
newParagraph.classList.add("post__content");

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newSpan = document.createElement("span");
newSpan.textContent = "@username";
newSpan.classList.add("post__username");
const newButton = document.createElement("button");

newButton.textContent = "♥ Like";
newButton.classList.add("post__button");
newButton.setAttribute("type", "button");
newButton.setAttribute("data-js", "like-button");

document.body.append(newArticle);
newArticle.append(newParagraph, newFooter);
newFooter.append(newSpan, newButton);

newButton.addEventListener("click", handleLikeButtonClick);
