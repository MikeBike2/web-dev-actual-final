<script>
  import Card from "../components/Card.svelte";
  export let data;
</script>

<header></header>

<main>
  <div>
    <Card {data} />
    
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }
</style>
