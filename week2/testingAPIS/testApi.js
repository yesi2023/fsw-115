let tvList = `{

    "response_code": 0,
    "results": [
      {
        "category": "Entertainment: Television",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who is the star of the AMC series Breaking Bad?",
        "correct_answer": "Walter White",
        "incorrect_answers": ["Saul Goodman", "Jesse Pinkman", "Skyler White"]
      },
      {
        "category": "Entertainment: Television",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In the show, Doctor Who, what does T.A.R.D.I.S stand for?",
        "correct_answer": "Time And Relative Dimensions In Space",
        "incorrect_answers": [
          "Time And Resting Dimensions In Space",
          "Time And Relative Dimensions In Style",
          "Toilet Aid Rope Dog Is Soup"
        ]
      },
      {
        "category": "Entertainment: Television",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the real name of the famous spanish humorist, El Risitas?",
        "correct_answer": "Juan Joya Borga",
        "incorrect_answers": [
          "Gabriel Garcia Marquez",
          "Jesus Quintero",
          "Ernesto Guevara"
        ]
      },
      {
        "category": "Entertainment: Television",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In Breaking Bad, Walter White is a high school teacher diagnosed with which form of cancer?",
        "correct_answer": "Lung Cancer",
        "incorrect_answers": [
          "Prostate Cancer",
          "Brain Cancer",
          "Testicular Cancer"
        ]
      },
      {
        "category": "Entertainment: Television",
        "type": "multiple",
        "difficulty": "easy",
        "question": "How many seasons did the Sci-Fi television show Stargate Atlantis have?",
        "correct_answer": "5",
        "incorrect_answers": ["10", "2", "7"]
      }
    ]
  }`;

let funTV = JSON.parse(tvList);
let funTvList = document.getElementById("list");

for (i = 0; i < funTV.results.length; i++) {
  let category = document.createElement("h2");
  let types = document.createElement("li");
  let difficulty = document.createElement("li");
  let questions = document.createElement("li");
  let correctAnswers = document.createElement("li");
  let incorrect_answers = document.createElement("li");

  category.textContent = funTV.results[i].category;
  document.body.append(category);

  types.textContent = funTV.results[i].type;
  document.body.append(types);

  difficulty.textContent = funTV.results[i].difficulty;
  document.body.append(difficulty);

  questions.textContent = funTV.results[i].question;
  document.body.append(questions);

  correctAnswers.textContent = funTV.results[i].correct_answer;
  document.body.append(correctAnswers);

  incorrect_answers.textContent = funTV.results[i].incorrect_answers;
  document.body.append(incorrect_answers);
}
