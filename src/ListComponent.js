import { useState } from "react";
import ListItemComponent from "./ListItemComponent";

const ListComponent = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(["First Element"]);

  const onClickHandler = (input) => {
    if (input.trim() === "") return;
    const updatedElement = [...item, input];
    setItem(updatedElement);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onEnterHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler(input);
    }
  };

  return (
    <>
      <input
        onKeyDown={onEnterHandler}
        onChange={onChangeHandler}
        value={input}
        placeholder="new task"
      />
      <h2>{item.length}</h2>
      <ul>
        {item.map((element, index) => (
          <ListItemComponent
            key={`${element}-${index}`}
            element={element}
            index={index}
          />
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add new element</button>
    </>
  );
};

export default ListComponent;
