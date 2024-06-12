
<script>
  export let AllPokemonNames;
  let pokemon = AllPokemonNames;
  let pokemonIndex = "132";

</script>

<div class="card">
  <img src= "/" alt={pokemon.name} />
  <div class="info">
    <h2>{pokemon.name}</h2>
    <p>Height: </p>
    <p>Weight:</p>
    <p>Type: </p>
  </div>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    border-radius: 0.375rem;
    box-shadow:
      0 1px 2px 0 rgba(0, 0, 0, 0.05),
      0 1px 3px 1px rgba(0, 0, 0, 0.05);
    padding: 1rem;
  }
  h1 {
    border-top: 2px solid;
    padding-top: 0.5rem;
  }
</style>
