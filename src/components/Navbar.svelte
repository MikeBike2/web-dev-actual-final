<script>
  //ended up using the header for nav for now.
  import Button from "./Button.svelte";
</script>

<nav>
  <div></div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    box-shadow:
      0 1px 2px 0 rgba(0, 0, 0, 0.05),
      0 1px 3px 1px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    width: 100%;
    background-color: #4a5568;
    color: #ffffff;
  }
</style>
