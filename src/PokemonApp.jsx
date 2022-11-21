import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, pokemonSlice } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, page, pokemons } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handleNext = (page) => {
    dispatch(getPokemons(page));
  };
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => handleNext(page)}>
        Next
      </button>
    </>
  );
};
