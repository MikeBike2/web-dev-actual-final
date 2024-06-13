<!-- Card.svelte -->
<script>
  import Button from "./Button.svelte";

  // Define the prop to receive the data
  export let data;

  // Function to toggle the display of stats
  let showStats = false;
  const toggleStats = () => {
    showStats = !showStats;
  };

  // Function to get the image URL of a Pokémon
  const getImageUrl = (pokemon) => {
    const id = pokemon.url.split('/').slice(-2, -1)[0]; /* takes the last element from the array*/
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  // Function to get the ID of a Pokémon
  const getPokemonId = (pokemon) => {
    const id = pokemon.url.split('/').slice(-2, -1)[0];
    return id;
  };

  // Asynchronous function to load additional stats for a Pokémon
  export async function loadPokemonStats({ fetch, pokemon }) {
    try {
      const pokemonId = getPokemonId(pokemon);
      const apiurl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
      const res = await fetch(apiurl);
      const stats = await res.json();

      if (!stats || !stats.abilities) {
        throw new Error("Failed to fetch Pokémon stats or incorrect data format");
      }

      // Process the stats data as needed
      const abilities = stats.abilities.map(ability => ability.ability.name);

      return { abilities };
    } catch (error) {
      console.error("Error loading Pokémon stats:", error);
      return {
        status: 500,
        error: new Error("Failed to load Pokémon stats data"),
      };
    }
  }
</script>

<div class="card-container">
  {#each data.AllPokemon as pokemon}
    <div class="pokemon-card">
      <img src={getImageUrl(pokemon)} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <!-- Button to toggle stats display -->
      <Button text="Show Stats" onClick={toggleStats} />
      <!-- Display stats if showStats is true -->
      {#if showStats}
        {#await loadPokemonStats({ fetch, pokemon })}
          <p>Loading...</p>
        {:then stats}
          <div class="pokemon-stats">
            <p>Abilities:</p>
            {#each stats.abilities as ability}
              <p>{ability}</p>
            {/each}
          </div>
        {:catch error}
          <p>Error: {error.message}</p>
        {/await}
      {/if}
    </div>
  {/each}
</div>

<style>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .pokemon-card {
    width: 30%;
    margin-bottom: 20px;
    text-align: center;
  }

  .pokemon-card img {
    width: 100%;
    height: auto;
  }

  .pokemon-card h1 {
    margin-top: 0;
    border-top: 2px solid;
    padding-top: 0.5rem;
  }

  .pokemon-stats {
    margin-top: 10px;
  }
</style>
