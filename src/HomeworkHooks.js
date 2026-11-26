import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useReducer,
} from "react";
import "./App.css";

// Задача 1: useEffect
function Task1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Компонент обновился! Текущее значение:", count);
  });

  return (
    <div>
      <h3>Задача 1 (useEffect)</h3>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Обновить</button>
    </div>
  );
}

// Задача 2: useLayoutEffect
function Task2() {
  const [clicks, setClicks] = useState(0);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (clicks > 0 && containerRef.current) {
      const p = document.createElement("p");
      p.textContent = `Новый абзац №${clicks}`;
      containerRef.current.appendChild(p);
    }
  }, [clicks]);

  return (
    <div>
      <h3>Задача 2 (useLayoutEffect)</h3>
      <button onClick={() => setClicks((prev) => prev + 1)}>
        Добавить абзац
      </button>
      <div ref={containerRef}></div>
    </div>
  );
}
// Задача 3: useState (случайное имя)
const names = ["Анна", "Максим", "София", "Артём", "Елена"];

function Task3() {
  const [randomName, setRandomName] = useState("");
  const handleRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setRandomName(names[randomIndex]);
  };
  return (
    <div>
      <h3>Задача 3 (useState)</h3>
      <button onClick={handleRandomName}>Поприветствовать</button>
      {randomName && <p>Hello, {randomName}!</p>}
    </div>
  );
}
// Задача 4: useReducer (Имя, Фамилия, Год рождения)
const initialUser = { name: "", lastName: "", birthYear: "" };

function myReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_BIRTH_YEAR":
      return { ...state, birthYear: action.payload };
    default:
      return state;
  }
}

function Task4() {
  const [user, dispatch] = useReducer(myReducer, initialUser);
  const [nameInput, setNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [birthYearInput, setBirthYearInput] = useState("");

  return (
    <div>
      <h3>Задача 4 (useReducer)</h3>
      <div>
        <input
          type="text"
          placeholder="Имя"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button
          onClick={() => dispatch({ type: "SET_NAME", payload: nameInput })}
        >
          Имя
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Фамилия"
          value={lastNameInput}
          onChange={(e) => setLastNameInput(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch({ type: "SET_LAST_NAME", payload: lastNameInput })
          }
        >
          Фамилия
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Год рождения"
          value={birthYearInput}
          onChange={(e) => setBirthYearInput(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch({ type: "SET_BIRTH_YEAR", payload: birthYearInput })
          }
        >
          Год рождения
        </button>
      </div>

      <p>Имя: {user.name}</p>
      <p>Фамилия: {user.lastName}</p>
      <p>Год рождения: {user.birthYear}</p>
    </div>
  );
}

// Главный компонент домашнего задания
function HomeworkHooks() {
  return (
    <div className="App">
      <header className="App-header">
        <Task1 />
        <hr />
        <Task2 />
        <hr />
        <Task3 />
        <hr />
        <Task4 />
      </header>
    </div>
  );
}

export default HomeworkHooks;
