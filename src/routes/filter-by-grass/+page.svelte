
<script>
    export let data;
  </script>
  
  <div class="pokemon-container">
    {#each data.AllGPNames as pokemon}
      <div class="pokemon-card">
        <p class="pokemon-name">{pokemon}</p>
        <a href="https://pokemondb.net/pokedex/{pokemon}"><img src="https://img.pokemondb.net/sprites/scarlet-violet/normal/{pokemon}.png" alt="{pokemon}"></a>
        
      </div>
    {/each}
  </div>
  
  <style>
    .pokemon-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
    }
  
    .pokemon-card {
      text-align: center;
      margin: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 180px;
    }
  
    .pokemon-card .pokemon-name {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  
    .pokemon-card img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      transition: transform 0.2s ease-in-out;
    }
  
    .pokemon-card img:hover {
      transform: scale(1.1);
    }
  </style>
  