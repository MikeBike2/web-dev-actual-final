<script>
  import Button from "../../components/Button.svelte";
  import Images from "../../components/Images/whosthatpokemon.png"

  let currentQuestion = 0;
  let score = 0;

  const questions = [
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      options: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
      answer: "Pikachu",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      options: ["Charizard", "Blastoise", "Caterpie", "Charmander"],
      answer: "Charmander",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      options: ["Squirtle", "Venusaur", "Pikachu", "Charizard"],
      answer: "Squirtle",
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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      options: ["Charizard", "Blastoise", "Venusaur", "Pidgeot"],
      answer: "Charizard",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
      options: ["Caterpie", "Butterfree", "Beedrill", "Pidgey"],
      answer: "Caterpie",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
      options: ["Eevee", "Jolteon", "Vaporeon", "Flareon"],
      answer: "Eevee",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
      options: ["Mew", "Mewtwo", "Zapdos", "Articuno"],
      answer: "Mewtwo",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
      options: ["Snorlax", "Dragonite", "Gyarados", "Lapras"],
      answer: "Snorlax",
      selectedAnswer: null,
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png",
      options: ["Espeon", "Umbreon", "Lugia", "Ho-oh"],
      answer: "Espeon",
      selectedAnswer: null,
    },
  ];

  function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    questions.forEach((question) => {
      question.selectedAnswer = null;
    });
  }

  function selectAnswer() {
    const correctAnswer = questions[currentQuestion].answer;
    const selectedAnswer = questions[currentQuestion].selectedAnswer;

    if (selectedAnswer === correctAnswer) {
      score++; // Increment score if selected answer is correct
    }

    currentQuestion++; // Move to the next question

    if (currentQuestion >= questions.length) {
      alert(`Quiz completed! Your score is ${score}/${questions.length}`);
      resetQuiz(); // Reset quiz after completion
    }
  }
</script>

<h1>Who's That Pokemon</h1>

<div class="quiz-container">
  <img
    src={questions[currentQuestion].imageUrl}
    alt={questions[currentQuestion].answer}
    class="quiz-image"
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
     text-align: center; /* Center align the text */
     color: #333; /* Set text color */
     font-size: 2rem; /* Adjust font size */
     margin-bottom: 20px; /* Add margin below the heading */
     letter-spacing: 2px; /* Adjust letter spacing */
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
     background-size: cover; /* Cover the entire container with the background image */
     background-position: right; 
    
   }
   
   .quiz-image {
     max-width: 100%;
     height: auto;
     transition: filter 0.3s ease; /* Smooth transition for filter effects */
   }
 
   .option {
     margin: 10px 0;
   }
 
   input[type="radio"] {
     appearance: none; /* Remove default radio button appearance */
     width: 1em;
     height: 1em;
     border-radius: 50%; /* Create a circular radio button */
     border: 2px solid #333; /* Add border for visual clarity */
     margin-right: 0.5em; /* Space between radio button and label */
   }
 
   input[type="radio"]:checked {
     background-color: #333; /* Change background color when checked */
   }
 
   /* Media query for responsive adjustments */
   @media screen and (max-width: 768px) {
     .quiz-container {
       flex-direction: column;
       height: auto;
       background-position: left; 
     }
     .quiz-image {
       max-width: 60%; /* Adjusted width for smaller screens */
     }
   }
 
   @media screen and (max-width: 480px) {
     .quiz-image {
       max-width: 40%; /* Further reduced width for smaller screens */
       background-position: left; 
     }
   }
 </style>
