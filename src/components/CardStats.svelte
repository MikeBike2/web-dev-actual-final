<!-- Card.svelte -->
<script>
  import { onMount } from 'svelte';
  import Button from "./Button.svelte";
  
  // Define the prop to receive the data
  export let data;

  // Define a variable to store the stats data
  let statsData = {};

  // Function to handle the click event
  const handleClick = async (pokemonName) => {
    try {
      // Make the API call to fetch the stats of the Pokémon using its name
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      statsData = await response.json();
      console.log(statsData);

      // Process the stats data from the API call as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Define a variable to manage the stats display
  let showStats = false;

  // Function to toggle the display of stats
  const toggleStats = () => {
    showStats = !showStats;
  };

  // Function to get the image URL of a Pokémon
  const getImageUrl = (pokemon) => {
    const id = pokemon.url.split('/').slice(-2, -1)[0];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  // Lifecycle hook to fetch stats when component is mounted
  onMount(async () => {
    // Fetch stats for the first Pokemon initially
    if (data && data.AllPokemon && data.AllPokemon.length > 0) {
      const firstPokemonName = data.AllPokemon[0].name;
      await handleClick(firstPokemonName);
    }
  });
</script>

<div class="card-container">
  {#each data.AllPokemon as pokemon}
    <div class="pokemon-card">
      <img src={getImageUrl(pokemon)} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <!-- Button to trigger the API call -->
      <Button text="Get Stats" on:click={() => handleClick(pokemon.name)} />
      <!-- Display stats if showStats is true -->
      {#if showStats}
        <div class="pokemon-stats">
          <h2>Abilities:</h2>
          {#each statsData.abilities as ability}
            <p>{ability.ability.name}</p>
          {/each}
          <!-- Add more stats here -->
        </div>
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
