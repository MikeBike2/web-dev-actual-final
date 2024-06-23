<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Button from "../components/Card.svelte";

  let headerItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "../about" },
    { text: "Pokemon Quiz", href: "../pokemon-quiz" },
    {text: "Pokemon Quiz(hard)", href: "../pokemon-quiz-hard"},
  ];

  let footerItems = [
    { text: "Top of Page", href: "/" },
    { text: "About", href: "../about" },
  ];

  let navItems = [
  { text: "Filter by Fire Type", href: "/" },
  { text: "Filter by Water Type", href: "/" },
  { text: "Filter by Grass Type", href: "/" },
 
];
</script>

<header>
  <Header {headerItems} />
</header>
<nav>
  <Navbar {navItems}/>
</nav>
<slot />
<footer>
  <Footer {footerItems} />
</footer>

<style>
  header,
  footer {
    font-size: 1rem;
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
