export async function load({ fetch }) {
  try {
    const apiurl = `https://pokeapi.co/api/v2/type/fire/`;
    const res = await fetch(apiurl);
    const data = await res.json();

    if (!data || !data.pokemon || !Array.isArray(data.pokemon)) {
      throw new Error("Failed to fetch Pokémon data or incorrect data format");
    }

    const AllFPNames = data.pokemon.map((pokemon) => pokemon.pokemon.name);

    return { AllFPNames };
  } catch (error) {
    console.error("Error loading Pokémon:", error);
    return {
      status: 500,
      error: new Error("Failed to load Pokémon data"),
    };
  }
}
