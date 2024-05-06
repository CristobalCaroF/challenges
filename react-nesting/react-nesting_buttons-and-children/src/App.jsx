import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Hello</Button>
      <Button>My favorite</Button>
      <Button>number is</Button>
      <Button>5</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
