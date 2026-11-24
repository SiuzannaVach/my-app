import { useState } from "react";
import ListItemComponent from "./ListItemComponent";
import ButtonComponent from "./ButtonComponent";

const ListComponent = () => {
  const initialValue = [
    { id: 1, name: "first" },
    { id: 2, name: "second" },
    { id: 3, name: "third" },
  ];
  const [input, setInput] = useState("");
  const [item, setItem] = useState(initialValue);

  const onClickHandler = (input) => {
    if (input.trim() === "") return;
    const updatedElement = [...item, { id: 5, name: input }];
    setItem(updatedElement);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onEnterHandler = (e) => {
    if (e.key === "Enter") {
      const updatedElement = [...item, { id: Date.now(), name: input }];
      setItem(updatedElement);
      setInput("");
      onClickHandler(input);
    }
  };

  const handleDelete = (id) => {
    const filteredItems = item.filter((element) => element.id !== id);
    setItem(filteredItems);
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
        {item.map((element) => (
          <ListItemComponent
            key={element.id}
            id={element.id}
            name={element.name}
          >
            <ButtonComponent
              text={"delete"}
              onClick={() => handleDelete(element.id)}
              type={"button"}
            />
          </ListItemComponent>
        ))}
      </ul>

      <button onClick={() => onClickHandler(input)}>Add new element</button>
    </>
  );
};

export default ListComponent;
