<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Button from "../components/Card.svelte";

  let navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "../about" },
    { text: "Pokemon Quiz", href: "../pokemon-quiz" },
  ];

  let footerItems = [
    { text: "Top of Page", href: "/" },
    { text: "About", href: "../about" },
  ];
</script>

<header>
  <Header {navItems} />
</header>

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
