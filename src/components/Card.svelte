<script>
  import Button from "./Button.svelte";
  export let data;

  // Function to toggle the display of stats
  let showStats = false;
  const toggleStats = () => {
    showStats = !showStats;
  };

  // Function to get the image URL of a Pokemon
  // @ts-ignore
  const getImageUrl = (pokemon) => {
    const id = pokemon.url
      .split("/")
      .slice(-2, -1)[0]; /* takes the last element from the array*/
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  // Function to get the ID of a Pokemon
  // @ts-ignore
  const getPokemonId = (pokemon) => {
    const id = pokemon.url.split("/").slice(-2, -1)[0];
    return id;
  };

  // Asynchronous function to load abilities for a Pokemon
  // @ts-ignore
  export async function loadPokemonStats({ fetch, pokemon }) {
    try {
      const pokemonId = getPokemonId(pokemon);
      const apiurl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
      const res = await fetch(apiurl);
      const stats = await res.json();

      if (!stats) {
        throw new Error("Failed to fetch Pokemon stats");
      }

      // @ts-ignore
      // create a new array based on the results of the function.
      const abilities = stats.abilities.map((ability) => ability.ability.name);
      const types = stats.types.map((type) => type.type.name);
      //return a promise
      return { abilities,types };
    } catch (error) {
      console.error("Error loading Pokemon stats:", error);
      return {
        status: 500,
        error: new Error("Failed to load Pokemon stats data"),
      };
    }
  }
</script>

<div class="card-container">
  {#each data.AllPokemon as pokemon}
    <article class="pokemon-card">
      <img src={getImageUrl(pokemon)} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <!-- Button to toggle stats display -->
      <Button text="Show Stats" onClick={toggleStats} />
      <!-- Display stats if showStats is true -->
      {#if showStats}
        <!--using an await block here because we are accessing a proimise -->
        {#await loadPokemonStats({ fetch, pokemon })}
          <!--message while the promise is being fufilled-->
          <p>Loading...</p>
          <!-- once promise has been fufilled then we can work with data-->
        {:then stats}
          <section class="pokemon-stats">
            <h2>Abilities:</h2>
            
            {#each stats.abilities as ability}
              <p>{ability}</p>
              
            {/each}
            <h2>Type</h2>
            {#each stats.types as type}
            <p>{type}</p>
            {/each}
          </section>
        {:catch error}
          <p>Error: {error.message}</p>
        {/await}
      {/if}
    </article>
  {/each}
</div>

<style>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }

  .pokemon-card {
    margin-bottom: 20px;
    text-align: center;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
  }

  .pokemon-card img {
    max-width: 100%;
    height: auto;
  }

  .pokemon-card h1 {
    margin-top: 0;
    border-top: 2px solid;
    padding-top: 0.5rem;
    font-size: 1.2rem; /* Base font size */
  }

  .pokemon-stats {
    margin-top: 10px;
  }

  /* Media query for adjusting image size and font size */
  @media screen and (max-width: 768px) {
    .pokemon-card img {
      max-width: 80%;
    }

    .pokemon-card h1 {
      font-size: 1rem; /* Adjusted font size for smaller screens */
    }
  }

  @media screen and (max-width: 480px) {
    .pokemon-card img {
      max-width: 100%;
    }

    .pokemon-card h1 {
      font-size: 0.8rem; /* Further adjusted font size for even smaller screens */
    }
  }
</style>
