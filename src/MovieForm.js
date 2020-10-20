import React, { useState } from "react";

export default function MovieForm(props) {
  const [text, setText] = useState("");
  const { submitForm } = props;

  return (
    <div>
      <form data-testid="movie-form" onSubmit={() => submitForm({ text })}>
        <label htmlFor="text">
          Text
          <input
            type="text"
            id="text"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
