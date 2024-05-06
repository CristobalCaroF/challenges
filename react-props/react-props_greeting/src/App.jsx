import "./App.css";

export default function App() {
  return (
    <div>
      <Greeting name={"Cristobal"} />
    </div>
  );
}

function Greeting({ name }) {
  return <div>Hello, {name}!</div>;
}
