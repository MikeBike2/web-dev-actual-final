<script>
  let currentYear = new Date().getFullYear();
  //test
</script>

<footer>
  <div class="image-container">
    <img
      src="src/components/Images/pokedex_image.png"
      width="200"
      height="100"
      alt="team-logo"
      class="hover-image"
    />
  </div>

  <nav>
    <ul>
      <li>
        <a href="/" class="RepoLink">Link to Git Repository</a>
      </li>
      <li><a href="/">About</a></li>
      <li><a href="/">Top of page</a></li>
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

  footer .image-container {
    opacity: 0; /* Initially hide the image */
    transition: opacity 0.3s ease; /* transition for opacity change*/
  }

  footer:hover .image-container {
    opacity: 1; /* Show the image on footer hover */
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
</style>
