<script>
  //will code random quiz data if i get time using api call. so its not the same quiz each time
  //current bug with brightness transition but ran out of time to solve this 
  import { onMount } from 'svelte';
  import Button from "../../components/Button.svelte";
  import Images from "../../components/Images/whosthatpokemon.png";
  import Sounds from "../../components/Sounds/who's-that-pokemon-made-with-Voicemod.mp3"
  let currentQuestion = 0;
  let score = 0;
  let brightness = 0; // Initial brightness

  const questions = [
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
      options: ["Metapod", "Butterfree", "Beedrill", "Pidgey"],
      answer: "Metapod",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      options: ["Pikachu", "Jigglypuff", "Meowth", "Snorlax"],
      answer: "Pikachu",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
      options: ["Vulpix", "Ninetales", "Growlithe", "Arcanine"],
      answer: "Vulpix",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
      options: ["Growlithe", "Arcanine", "Poliwag", "Poliwhirl"],
      answer: "Growlithe",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
      options: ["Farfetch'd", "Doduo", "Dodrio", "Fearow"],
      answer: "Farfetch'd",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
      options: ["Koffing", "Weezing", "Grimer", "Muk"],
      answer: "Koffing",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
      options: ["Vaporeon", "Jolteon", "Flareon", "Eevee"],
      answer: "Jolteon",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
      options: ["Dragonite", "Dratini", "Dragonair", "Gyarados"],
      answer: "Dragonite",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png",
      options: ["Chinchou", "Lanturn", "Qwilfish", "Remoraid"],
      answer: "Lanturn",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png",
      options: ["Bellossom", "Sunflora", "Sunkern", "Skiploom"],
      answer: "Bellossom",
      selectedAnswer: null,
    },
  ];
  function playSound() {
    const audio = new Audio(`${Sounds}`);
    audio.play();
  }
  function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    questions.forEach((question) => {
      question.selectedAnswer = null;
    });
    brightness = 0; // Reset brightness to initial value
  }

  function selectAnswer() {
    const correctAnswer = questions[currentQuestion].answer;
    const selectedAnswer = questions[currentQuestion].selectedAnswer;

    if (selectedAnswer === correctAnswer) {
      score++; // Increment score if selected answer is correct
    }

    brightness = 100;
    // Move to the next question after a brief delay
    setTimeout(() => {
      currentQuestion++;
      brightness = 0; // Reset brightness after delay
      if (currentQuestion >= questions.length) {
        alert(`Quiz completed! Your score is ${score}/${questions.length}`);
        resetQuiz(); // Reset quiz after completion
      }
    }, 2000); // Delay in milliseconds
  }
  onMount(playSound);
</script>

<h1>Who's That Pokemon</h1>

<div class="quiz-container">
  <img
    src={questions[currentQuestion].imageUrl}
    alt={questions[currentQuestion].answer}
    class="quiz-image"
    style={`filter: brightness(${brightness}%)`}
  />

  {#each questions[currentQuestion].options as option}
    <div class="option">
      <input
        type="radio"
        id={option}
        name="answer"
        bind:group={questions[currentQuestion].selectedAnswer}
        value={option}
      />
      <label for={option}>{option}</label>
    </div>
  {/each}
  <Button text="Select Answer" onClick={selectAnswer} />
</div>

<style>
  h1 {
    text-align: center; 
    color: #333; 
    font-size: 2rem; 
    margin-bottom: 20px;
    letter-spacing: 2px; 
  }

  .quiz-container {
    border: solid black 1px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 80vh;
    max-width: 80%;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    background-image: url("../../components/Images/whosthatpokemon.png");
    background-size: cover; 
    background-position: right;
  }

  .quiz-image {
    max-width: 100%;
    height: auto;
    transition: filter 0.3s ease; 
  }

  .option {
    margin: 10px 0;
  }

  input[type="radio"] {
    appearance: none; 
    width: 1em;
    height: 1em;
    border-radius: 50%; 
    border: 2px solid #333;
    margin-right: 0.5em; 
  }

  input[type="radio"]:checked {
    background-color: #333; 
  }

  @media screen and (max-width: 768px) {
    .quiz-container {
      flex-direction: column;
      height: auto;
      background-position: left;
    }
    .quiz-image {
      max-width: 60%; 
    }
  }

  @media screen and (max-width: 480px) {
    .quiz-image {
      max-width: 40%; 
      background-position: left;
    }
  }
</style>
