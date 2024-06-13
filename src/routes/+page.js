export async function load({ fetch }) {
  try {
    const MAX_POKEMON = "151";
    const offset = "0";
    const apiurl = `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}&offset=${offset}`;
    const res = await fetch(apiurl);
    const data = await res.json();

    if (!data || !data.results || !Array.isArray(data.results)) {
      throw new Error("Failed to fetch Pokémon data or incorrect data format");
    }

    const AllPokemon = data.results;

    return { AllPokemon };
  } catch (error) {
    console.error("Error loading Pokémon:", error);
    return {
      status: 500,
      error: new Error("Failed to load Pokémon data"),
    };
  }
}


