# View current movies

## Value Proposition

**As a** `User` <br>
**I want to** `see a list of current movies (both classics and new releases)` <br>
**so that** `I can explore and add movies to my watchlist` <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- The movies list should include both classics and new releases.
- Each movie should display its poster, title, and rating.
- Each movie should link to a details page with further information.
- The user should have the option to add any movie to their personal watchlist.
- The user can filter the list by genre and year of release.
- If no movies match the user's selected filters, a "No matches found" message should be displayed, along with filter-related suggestions (same genre, different years / same year, different genres).
- If unable to retrieve movie data, the user should see a message stating, "Sorry, we couldn't retrieve the latest movie data at the moment. Please try again later.".

## Tasks

- Create feature branch.
- Implement movies list to display movies.
- Pull data from correct API/API's.
- Create movie card with the following details:
  - poster
  - title
  - rating
- Create link for each movie to navigate to corresponding details page.
- Add a "Add to watchlist" button for each movie in the list.
- Implement a filter functionality that allows user to filter movies by genre and/or year of release.
- When no movies match the user’s selected filters display a "No matches found" message along with suggestions for alternative movies based on the user's selection of:
  - same genre, different year of release
  - different genre, same year of release
- Implement error handling when movie data cannot be retrieved and display error message: “Sorry, we couldn't retrieve the latest movie data at the moment. Please try again later.”.
