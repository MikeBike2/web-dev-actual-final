<script>
  import Button from "./Button.svelte";
  export let navItems;
</script>

<nav>
  <ul>
    {#each navItems as item}
      <li><a href={item.href}>{item.text}</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    display: flex;
    justify-content: center;
    background-color: #4a5568;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    box-shadow:
      0 1px 2px 0 rgba(0, 0, 0, 0.05),
      0 1px 3px 1px rgba(0, 0, 0, 0.05);
  }

  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #ffffff;
    opacity: 0.8;
  }
</style>
