//https://opentdb.com/api.php?amount=6&category=24&difficulty=easy&type=multiple

let myPolitics = [
  {
    category: "Politics",
    type: "multiple",
    difficulty: "easy",
    question:
      "Whose 2016 presidential campaign slogan was Make America Great Again?",
    correct_answer: "Donald Trump",
    incorrect_answers: ["Ted Cruz", "Marco Rubio", "Bernie Sanders"],
  },
  {
    category: "Politics",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following Pacific Islander countries is ruled by a constitutional monarchy?",
    correct_answer: "Tonga",
    incorrect_answers: ["Palau", "Fiji", "Kiribati"],
  },
  {
    category: "Politics",
    type: "multiple",
    difficulty: "easy",
    question: "The largest consumer market in 2015 was...?",
    correct_answer: "The United States of America",
    incorrect_answers: ["Germany", "Japan", "United Kingdom"],
  },
  {
    category: "Politics",
    type: "multiple",
    difficulty: "easy",
    question: "How many people are in the U.S. House of Representatives?",
    correct_answer: "435",
    incorrect_answers: ["260", "415", "50"],
  },
  {
    category: "Politics",
    type: "multiple",
    difficulty: "easy",
    question:
      "Former United States President Bill Clinton famously played which instrument?",
    correct_answer: "Saxophone",
    incorrect_answers: ["Baritone horn", "Piano", "Violin"],
  },
  {
    category: "Politics",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which former US president was nicknamed Teddy after he refused to shoot a defenseless black bear?",
    correct_answer: "Theodore Roosevelt",
    incorrect_answers: ["Woodrow Wilson", "James F. Fielder", "Andrew Jackson"],
  },
];

let myPoliticsList = document.getElementById("list");

for (var i = 0; i < myPolitics.length; i++) {
  myPoliticsList.innerHTML +=
    "<li>" +
    "Question: " +
    myPolitics[i].question +
    " " +
    "Ready go!!! " +
    "  " +
    "  " +
    "The correct answer is:" +
    " " +
    myPolitics[i].correct_answer +
    "</li>";
}
