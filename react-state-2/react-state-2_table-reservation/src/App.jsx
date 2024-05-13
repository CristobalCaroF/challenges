import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);
  function handleAdd() {
    setPeople(people + 1);
    onclick = { handleAdd };
  }
  function handleDelete() {
    setPeople(people - 1);
    onclick = { handleDelete };
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onDelete={handleDelete} onAdd={handleAdd}></Counter>
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
