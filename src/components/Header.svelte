<script>
  export let navItems;
</script>

<header>
  <img
    src= "src\Images\pokedex-logo.png"
    alt="team-logo"
    class="logo-image"
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
    text-align: center;
  }

  .logo-image {
    width: 100%; /* Ensures the image spans the full width of its container */
    max-width: 400px;
    height: auto; /* Maintains aspect ratio */
    margin-bottom: 10px; 
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

  /* Media query for adjusting logo image size */
  @media screen and (max-width: 768px) {
    .logo-image {
      max-width: 300px; /* Adjusted maximum width for smaller screens */
    }
  }

  @media screen and (max-width: 480px) {
    .logo-image {
      max-width: 200px; /* Further adjusted maximum width for even smaller screens */
    }
  }
</style>
