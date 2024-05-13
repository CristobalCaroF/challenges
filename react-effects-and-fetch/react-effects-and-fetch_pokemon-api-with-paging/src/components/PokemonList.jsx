import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  return (
    <main>
      <button
        type="button"
        className="button"
        onClick={() => setOffset((prev) => (prev === 0 ? prev : prev - 1))}
        // onClick={() => setOffset((prev) => (prev > 1 ? prev - 1 : prev))}
        // onClick={() => setOffset(Math.max(0, offset - 1))}
      >
        Previous Page
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setOffset((state) => state + 1)}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
