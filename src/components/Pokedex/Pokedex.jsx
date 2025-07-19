import React, {useEffect, useState } from 'react'

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemon('pikachu'); // Fetch a default Pokémon on initial load
  },[]);
    // Optional: Fetch a default Pokémon on initial load)

  const getPokemon = async () => {
    setError(null);
    setPokemonData(null);
    
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {   
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-10 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-yellow-900">🔍 Mini Pokédex</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Enter Pokémon name"
          className="px-4 py-2 rounded border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-slate-800"
        />
        <button
          onClick={getPokemon}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow"
        >
          Catch!
        </button>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      {pokemonData && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-800">{pokemonData?.name?.toUpperCase()}</h2>
          <img
            src={pokemonData?.sprites?.front_default}
            alt={pokemonData?.name}
            className="w-40 mx-auto my-4"
          />
          <p className="text-yellow-700">
            Type:{" "}
            {pokemonData?.types?.map((t) => t.type.name).join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default Pokedex;
