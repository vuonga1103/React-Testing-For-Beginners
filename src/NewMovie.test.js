import React from "React";
import { render, cleanup, fireEvent } from "react-testing-library";
import NewMovie from "./NewMovie";

afterEach(cleanup);

test("<NewMovie/>", () => {
  const { debug, getByTestId, container, getByText } = render(<NewMovie />);
  debug();
  expect(getByTestId("page-title").textContent).toBe("New Movie");
  expect(getByTestId("movie-form")).toBeTruthy();

  // expect(container).toMatchSnapshot();

  fireEvent.click(getByText("Submit"));
});
