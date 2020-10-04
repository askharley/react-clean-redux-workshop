import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputChange = event => {
    return setInput(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(actionCreators.addToList(input));
    setInput("");
  };

  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };

  return (
    <div>
      <input
        className="input"
        placeholder="Add item..."
        value={input}
        onChange={handleInputChange}
      />
      <Button className="button" variant="outline-dark" onClick={handleSubmit}>
        Add
      </Button>
      <Button className="button" variant="outline-dark" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
}

export default Input;
