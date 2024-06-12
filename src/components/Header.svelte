<script>
  export let navItems;
</script>

<header>
  <h1> Pokemon</h1>
  <nav>
    <ul>
      {#each navItems as item}
        <li><a href={item.href}>{item.text}</a></li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    background: #f7f7f7;
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
    grid-column: 1 / 3;
  }
  h1 {
    font-size: 40px;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center; 
  }
  nav ul {
    list-style: none; 
    padding: 0; 
    margin: 0; 
    display: flex; 
  }
  nav ul li {
    margin: 0 10px; 
  }
  nav a {
    text-decoration: none; 
    color: black; 
  }
</style>

