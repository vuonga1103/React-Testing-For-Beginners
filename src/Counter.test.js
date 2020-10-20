import React from "React";
import { render, cleanup, fireEvent } from "react-testing-library";
import Counter from "./Counter";

afterEach(cleanup); // runs after each test; cleanup unmounts everything from the dom

test("<Counter />", () => {
  const { debug, getByTestId } = render(<Counter />);
  debug(); // outputs dom as string

  const counterButton = getByTestId("counter-button");

  expect(counterButton.tagName).toBe("BUTTON");
  expect(counterButton.textContent).toBe("0");

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe("1");

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe("2");

  debug();
});
