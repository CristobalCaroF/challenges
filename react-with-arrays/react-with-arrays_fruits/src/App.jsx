import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 1339,
      name: "🥭 Mango",
      color: "red",
    },
    {
      id: 1340,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 1341,
      name: "🍋 Lemon",
      color: "yellow",
    },
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <Card id={fruit.id} name={fruit.name} color={fruit.color} />
        </li>
      ))}
    </ul>
  );
}
