import React from "React";
import { render, cleanup, waitForElement } from "react-testing-library";
import MovieDetail, { POSTER_PATH } from "./MovieDetail";

global.fetch = require("jest-fetch-mock"); // setting up mock fetch

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

// mocking this.props.match.params.id
const match = {
  params: {
    id: "jfdklsajfs",
  },
};

const movie = {
  id: "hi",
  title: "Level Up Rules!",
};

test("<MovieDetail />", async () => {
  // setting up a mock response

  fetch.mockResponseOnce(JSON.stringify(movie));

  const { getByTestId } = render(<MovieDetail match={match} />);

  await waitForElement(() => getByTestId("movie-id"));

  expect(getByTestId("movie-id").textContent).toBe(movie.title);
});
