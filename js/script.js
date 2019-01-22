// array of questions and answers
var allQuestions = [
  {
    question: "Bitcoin was founded by Justin Sun.",
    category: "false",
    solution:
      "<div class='sol'><p>False! Bitcoin founder is unknown and her/his pseudonym is Satoshi Nakamoto.</p></div>"
  },
  {
    question:
      "If you lose your e-wallet there’s no way you can have back your cryptocurrencies.",
    category: "true",
    solution:
      "<div class='sol'><p>True! James Howell lost 7.500 Bitcoins ($127 million) by throwing away his hard drive while cleaning his house.</p></div>"
  },
  {
    question:
      "Bitcoin Pizza Day: on May 22 2010, a man paid for a pizza 10,000  bitcoins.",
    category: "true",
    solution:
      "<div class='sol'><p>Well, a geek actually did that, throwing away what now would be about $100M.</p></div>"
  },
  {
    question: "Vitalik Buterin founded Ethereum at the age of 35.",
    category: "false",
    solution:
      "<div class='sol'><p>False! he did it at the age of 18.  So if you are 35 and studying development now, you can cry.</p></div>"
  },
  {
    question: "PizzaCoin, ButtCoin, VGINA, are real cryptocurrency names.",
    category: "true",
    solution:
      "<div class='sol'><p>True! And there’s also our beloved PotCoin.</p></div>"
  },
  {
    question:
      "You can buy a train ticket from Paris to Milan on SNCF with cryptocurrencies.",
    category: "false",
    solution:
      "<div class='sol'><p>False, you optimist! But you can definitely buy a space travel ticket with Virgin Galactic.</p></div>"
  },
  {
    question: "Bitcoin and blockchain have nothing in common.",
    category: "false",
    solution:
      "<div class='sol'><p>These are the basics, man! Bitcoin was the first blockchain invented</p></div>"
  },
  {
    question: "Blockchain is a DDT.",
    category: "false",
    solution:
      "<div class='sol'><p>Ew gross! Blockchain is not an insecticide, but a DLT, a Distributed Ledger Technology.</p></div>"
  },
  {
    question:
      "In a near future you can throw away your national passport and become citizen of a borderless world.",
    category: "true",
    solution:
      "<div class='sol'><p>I hope so! The blockchain project Bitnation already hosted the world’s first blockchain birth certificate and World Citizenship.</p></div>"
  },
  {
    question: "Cryptokitties are a cool version of Pokemons.",
    category: "true",
    solution:
      "<div class='sol'><p>Go and see how kawai they are compared to old Pokemons!</p></div>"
  }
];

// function random questions

var questionCounter = 0;
var coinCounter = 0;
// var errorCounterFinal = 0;

function randomQuestions() {
  var numQuest = allQuestions.length;

  while (numQuest > 0) {
    var index = Math.floor(Math.random() * numQuest);
    numQuest--;

    var tempQuest = allQuestions[numQuest];
    allQuestions[numQuest] = allQuestions[index];
    allQuestions[index] = tempQuest;
    //console.log(tempQuest);
  }
  //console.log(questionArray);
}
randomQuestions();
updateQuestion();

function updateQuestion() {
  questionCounter++;
  if (allQuestions.length > 0) {
    var oneQuest = allQuestions[0];
    $(".question").html(oneQuest.question);
    //console.log(oneQuest);
  }
}

function addSolution() {
  var oneQuest = allQuestions[0];
  $(".solution").html(oneQuest.question);
  $(".solution").css("display", "flex");
  //console.log(oneQuest.solution);
}
// QUESTION IS FALSE
$(".false").click(function() {
  if (allQuestions[0].category.includes("false")) {
    $(`ul li:nth-child(${coinCounter})`).css(
      "backgroundImage",
      "url(./images/truecoin.png)"
    );
    //addSolution();
    allQuestions.shift();
    updateQuestion();
    questionCounter++;
    coinCounter++;
  } else {
    $(`ul li:nth-child(${coinCounter})`).css(
      "backgroundImage",
      "url(./images/shitcoin.png)"
    );
    allQuestions.shift();
    updateQuestion();
    questionCounter++;
    coinCounter++;
  }
});

// QUESTION IS TRUE
$(".true").click(function() {
  if (allQuestions[0].category.includes("true")) {
    $(`ul li:nth-child(${coinCounter})`).css(
      "backgroundImage",
      "url(./images/truecoin.png)"
    );
    addSolution();
    // allQuestions.shift();
    updateQuestion();
    questionCounter++;
    coinCounter++;
  } else {
    // CLICKED ON TRUE BUT WRONG ANWSER
    $(`ul li:nth-child(${coinCounter})`).css(
      "backgroundImage",
      "url(./images/shitcoin.png)"
    );
    allQuestions.shift();
    updateQuestion();
    questionCounter++;
    coinCounter++;
  }
});

// STEPS :
// Validate the question (true/false)
// Put the right coin in the wallet
// display the pop-up
// update all counters
// update the question
