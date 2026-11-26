import { useState, useEffect, useLayoutEffect, useRef } from "react";
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

// Главный компонент домашнего задания
function HomeworkHooks() {
  return (
    <div className="App">
      <header className="App-header">
        <Task1 />
        {/* Сюда ниже будем добавлять <Task2 />, <Task3 /> и т.д. */}
      </header>
    </div>
  );
}

export default HomeworkHooks;
