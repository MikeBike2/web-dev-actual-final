<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import Navbar from "../components/Navbar.svelte";
  

  let navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/" },
    { text: "Random pokemon", href: "/" },
  ];
</script>



<header>
  <Header {navItems} />
</header>


<footer>
  <Footer />
</footer>

<slot />


<style>
  header,
  footer {
    
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }
</style>
