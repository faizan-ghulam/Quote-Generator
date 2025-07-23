const quotes = [
   "My name is Muhammad Faizan.",
  "I am a front end developer .",
  "The techniques i use HTML CSS and JS.",
  "Success is not how high you have climbed, but how you make a positive difference.",
  "Hard work is key to succces."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
