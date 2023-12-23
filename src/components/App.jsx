import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [arr, setArray] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addWork() {
    setArray((oldArray) => {
      return [...oldArray, inputText];
    });
    //To clear the input field
    setInputText("");
  }

  function showItems(each_item) {
    return <li>{each_item}</li>;
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addWork}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{arr.map(showItems)}</ul>
      </div>
    </div>
  );
}

export default App;
