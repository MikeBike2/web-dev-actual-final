<script>
  export let navItems;
</script>

<header>

    <img
      src="src/components/Images/pokedex-logo.png"
      width="400"
      height="200"
      alt="team-logo"
      class="hover-image"
    />
  
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
    background: #f05454;
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
    grid-column: 1 / 3;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }
  nav {
    display: flex;
    justify-content: center;
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

