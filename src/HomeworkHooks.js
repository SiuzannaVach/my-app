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










// Главный компонент домашнего задания
function HomeworkHooks() {
  return (
    <div className="App">
      <header className="App-header">
        <Task1 />
        <hr />
        <Task2 />
      </header>
    </div>
  );
}

export default HomeworkHooks;
