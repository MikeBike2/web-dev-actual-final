export async function load({ fetch }) {
    try {
        console.log("hello")
        const MAX_POKEMON = 151;
        let offset = 0;
        let apiurl = `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}&offset=${offset}`;
        let res = await fetch(apiurl);
        let data = await res.json();

        const allPokemon = data.results;
        const AllPokemonNames = allPokemon.name 
        const PokeURL = allPokemon.url
        console.log(allPokemon)
        return {AllPokemonNames,PokeURL}; 
    } catch (error) {
        console.error("Error loading Pokémon:", error);
        console.log("error111")
        return []; 
    }
}
