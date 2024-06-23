<script>
  import Images from "../components/Images/pokedex-logo.png"
  let currentYear = new Date().getFullYear();

  export let footerItems;
</script>

<footer>
  <div class="image-container">
    <img src="{Images}" alt="team-logo" class="logo-image" />
  </div>

  <nav>
    <ul>
      {#each footerItems as item}
        <li><a href={item.href}>{item.text}</a></li>
      {/each}
    </ul>
  </nav>

  <div id="footer-year">{currentYear}</div>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 0.875rem;
    background: #f7f7f7;
    border-top: 1px solid #474350;
  }

  .logo-image {
    width: 200px;
    height: 100px;
  }

  footer .image-container {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  footer:hover .image-container {
    opacity: 1;
  }

  footer nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  }

  footer img {
    margin: 1em;
  }

  footer a {
    color: black;
    margin-right: 3rem;
    text-decoration: none;
  }

  footer a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1920px) {
    .logo-image {
      width: 250px; 
      height: auto; 
      display: none;
    }
  }

  /* Media queries for responsiveness */
  @media screen and (max-width: 768px) {
    .logo-image {
      width: 150px; /* Adjusted width for smaller screens */
      height: auto; /* Maintain aspect ratio */
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    .logo-image {
      display: none; /* Hide the logo image on smaller screens */
    }
  }
</style>
