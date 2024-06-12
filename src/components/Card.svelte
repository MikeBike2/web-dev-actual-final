<!-- Card.svelte -->
<script>
  // Declare the AllPokemon prop
  export let data;

  let showStats = false;

  const getImageUrl = (/** @type {{ url: string; }} */ pokemon) => {
    // Extract the Pokémon ID from the URL
    const id = pokemon.url.split('/').slice(-2, -1)[0];
    // Construct the image URL using the Pokémon ID
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  const toggleStats = () => {
    showStats = !showStats;
  }
</script>

<div class="card-container">
  {#each data.AllPokemon as pokemon}
    <div class="pokemon-card">
      <img src={getImageUrl(pokemon)} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      {#if showStats}
        <div class="pokemon-stats">
          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
          <!-- Add more stats as needed -->
        </div>
      {/if}
      <button on:click={toggleStats}>
        {showStats ? 'Hide Stats' : 'Show Stats'}
      </button>
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
