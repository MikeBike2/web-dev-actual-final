export async function load({ fetch }) {
  try {
    
    const apiurl = `https://pokeapi.co/api/v2//type/fire/`;
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
