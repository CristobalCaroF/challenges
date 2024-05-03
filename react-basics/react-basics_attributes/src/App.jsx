import "./App.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Best title ever</h2>
      <label htmlFor="input">Input label</label>
      <input id="input"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/French_fries"
      >
        Link to your heart
      </a>
    </article>
  );
}
