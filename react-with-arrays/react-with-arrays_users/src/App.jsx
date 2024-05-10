import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";
import { Fragment } from "react";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <ul className="app__user">
        {USERS.map((User) => (
          <div key={User.id}>
            <Card user={User} />
          </div>
        ))}
      </ul>
    </main>
  );
}
