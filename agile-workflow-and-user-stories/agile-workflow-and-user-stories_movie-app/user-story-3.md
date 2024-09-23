# Watchlist

## Value Proposition

**As a** `User` <br>
**I want to** `be able to add and manage movies in my personal watchlist` <br>
**so that** `I can keep track of movies I love or want to watch in the future.` <br>

## Description

![wireframe](./assets/scribble-watchlist.png)

## Acceptance Criteria

- Homepage and Watchlist pages should have a navigation for "Homepage" and "Watchlist".
- The user can access their watchlist from a dedicated "Watchlist" page.
- Each movie details page should have an "Add to Watchlist" button.
- Clicking the button adds the movie to the user’s watchlist and displays a success message "Movie added to watchlist".
- If a movie is already in the watchlist, the button should display "Remove from Watchlist."
- Clicking the button again removes the movie from the user's watchlist and displays a success message "Movie removed from watchlist".
- The user can remove any movie from the movie details page.
- The watchlist page should display all the movies the user has added.
- If no movies are currently in the watchlist a message is displayed: "Your watchlist is currently empty. Start adding movies you want to watch by clicking 'Add to Watchlist' on the movie details page. Your selected movies will appear here."
<!-- - The user can manage their watchlist by sorting/filtering them by title, genre, or release date. -->

## Tasks

- Create feature branch.
- Create a new React component for the Watchlist page.
- Create a reusable navigation component that includes links for "Homepage" and "Watchlist."
- Include the navigation component in the main layout, ensuring it appears on both the homepage and watchlist pages.
- Add an "Add to Watchlist" button on each movie details page.
- Implement functionality to add the selected movie to the user’s watchlist when button is clicked.
- Use React state to manage whether the movie is in the watchlist.
- Create a handler function for the button click.
- Use conditional rendering to change the button text based on the isInWatchlist state.
- Display success message: "Movie added to watchlist." / "Movie removed from watchlist."
- Ensure the user can remove any movie from the watchlist directly from the movie details page using the "Remove from Watchlist" button.
- Show movie card on watchlist page.
- If no movies are in the watchlist, display message: "Your watchlist is currently empty. Start adding movies you want to watch by clicking 'Add to Watchlist' on the movie details page. Your selected movies will appear here."
<!-- - Implement sorting options for the watchlist, allowing user to sort movies by:
  - Title (A-Z, Z-A)
  - Release date (newest to oldest, oldest to newest)
- Implement filtering options that allows user to filter by genre. -->
