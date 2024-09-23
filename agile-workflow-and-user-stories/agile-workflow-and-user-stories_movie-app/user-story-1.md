# View current movies

## Value Proposition

**As a** `User` <br>
**I want to** `see a list of current movies` <br>
**so that** `I can explore and add movies to my watchlist` <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- the movies list should include both classics and new releases
- each movie should display its poster, title, and rating
- each movie should link to a details page with further information
- the user should have the option to add any movie to their personal watchlist
- the user can filter the list by genre and year of release
- if no movies match the user's selected filters, a "No matches found" message should be displayed, along with filter-related suggestions (same genre, different years / same year, different genres)
- if unable to retrieve movie data, the user should see a message stating, "Sorry, we couldn't retrieve the latest movie data at the moment. Please try again later."

## Tasks

- implement the movies list to display both classic movies and new releases
- pull data from correct API/API's
- for each movie, display the following details:
  - poster
  - title
  - rating
- create a link for each movie to navigate to the corresponding details page
- add a "Add to watchlist" button for each movie in the list
- implement a filter functionality that allows user to filter movies by genre and/or year of release
- when no movies match the user’s selected filters display a "No matches found" message along with suggestions for alternative movies based on the user's selection of:
  - same genre, different year of release
  - different genre, same year of release
- implement error handling when movie data cannot be retrieved and display error message: “Sorry, we couldn't retrieve the latest movie data at the moment. Please try again later.”
