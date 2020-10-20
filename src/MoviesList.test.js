import React from "React";
import {
  render,
  cleanup,
  waitForElement,
  getByTestId,
} from "react-testing-library";
import MoviesList from "./MoviesList";
import { MemoryRouter } from "react-router-dom";

// Set up mock fetch
global.fetch = require("jest-fetch-mock");

// Mocking the array of movies that return from the fetch
const movies = {
  results: [
    {
      id: "1",
      poster_path: "jfkdsa.jpg",
      title: "Eternal Sunshine of the Spotless Mind",
    },
    {
      id: "2",
      poster_path: "fdsa.jpg",
      title: "Girl Interrupted",
    },
  ],
};

const movie = movies.results[0];

afterEach(() => {
  cleanup();
});

test("<MoviesList />", async () => {
  // Setting up a mock response
  fetch.mockResponseOnce(JSON.stringify(movies));

  const { queryByTestId, getByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );

  // Expect loading to there
  expect(queryByTestId("loading")).toBeTruthy();

  // Awaiting the element to be created from fetch call
  await waitForElement(() => queryByTestId("movie-link"));

  expect(queryByTestId("loading")).toBeFalsy();

  expect(queryByTestId("movie-link").getAttribute("href")).toBe("/" + movie.id);
});
