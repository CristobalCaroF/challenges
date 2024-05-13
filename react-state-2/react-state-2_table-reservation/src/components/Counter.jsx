// import { useState } from "react";
import "./Counter.css";

export default function Counter({ onAdd, onDelete }) {
  // const [people, setPeople] = useState(0);
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onAdd}
          // onClick={() => setPeople(people + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onDelete}
          // onClick={() => setPeople(people - 1)}
        >
          -
        </button>
      </div>
    </>
  );
}
