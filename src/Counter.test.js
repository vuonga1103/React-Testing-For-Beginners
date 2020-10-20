import React from "React";
import { render, cleanup } from "react-testing-library";
import Counter from "./Counter";

test("<Counter />", () => {
  const { debug, getByTestId } = render(<Counter />);
  debug(); // outputs dom as string

  expect(getByTestId("counter-button").tagName).toBe("BUTTON");

  expect(getByTestId("counter-button").textContent).toBe("0");
});

// assert that counter-button is a button
// assert that it starts at 0
