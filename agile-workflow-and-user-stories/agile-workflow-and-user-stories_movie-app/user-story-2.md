# Movie Details Page

## Value Proposition

**As a** `User` <br>
**I want to** `view detailed movie information` <br>
**so that** `I can learn more about the movie.` <br>

## Description

![wireframe](./assets/scribble-movie-details-page.png)

## Acceptance Criteria

- On click of the movie card a details page is displayed.
- The details page should display detailed information about the selected movie, including:
  - poster
  - title
  - release date
  - synopsis
- The user should have the option to navigate back to the movies list.
- While loading details, the user should see a loading state "Loading...".
- When data retrievel failed, display message "Unable to load movie details. Please try again later.".

## Tasks

- Create feature branch.
- Create a new React component for the Deatils page.
- Retrieve following data from API:
  - poster
  - title
  - release date
  - synposis
- Implement "Back"-button.
- Implement isLoading state.
- Implement error handling, display message "Unable to load movie details. Please try again later."
