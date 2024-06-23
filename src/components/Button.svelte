<script>
  export let text = '';
  export let onClick = () => {};
</script>

<button on:click={onClick}>{text}</button>

<style>
  button {
    background-color: #ee040f;
    color: #ffffff;
    padding: 0.75rem;
    margin: 0.75rem;
    box-shadow:
      0 1px 2px 0 rgba(0, 0, 0, 0.05),
      0 1px 3px 1px rgba(0, 0, 0, 0.05);
    border-radius: 0.375rem;
    cursor: pointer;
    font-size: 1rem; /* Base font size */
  }

  /* Media queries for responsiveness */
  @media screen and (max-width: 768px) {
    button {
      padding: 0.5rem;
      font-size: 0.9rem; 
    }
  }

  @media screen and (max-width: 480px) {
    button {
      padding: 0.4rem;
      font-size: 0.8rem; 
  }
}
</style>
