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

var counter = 0;
var errorCounter = 0;

var sounds = [
  new Audio("../Cryptopanda/sounds/nyah.wav"),
  new Audio("../sounds/shit.mp3")
];

//sounds[1].play();

function randomQuestions() {
  var numQuest = allQuestions.length;

  while (numQuest > 0) {
    var index = Math.floor(Math.random() * numQuest);
    numQuest--;

    var tempQuest = allQuestions[numQuest];
    allQuestions[numQuest] = allQuestions[index];
    allQuestions[index] = tempQuest;
    console.log(tempQuest);
  }
}

randomQuestions();
updateQuestion();

function updateQuestion() {
  counter++;
  if (allQuestions.length > 0) {
    var oneQuest = allQuestions[0];
    $(".question").html(oneQuest.question);
  }
}

function addSolution() {
  var oneQuest = allQuestions[0];
  $(".solution").html(oneQuest.solution);
  $(".solution").css("display", "flex");
  console.log("yo");
}

// QUESTION IS FALSE
$(".false").click(function() {
  sounds[1].play();
  $(".true").css("display", "none");
  $(".false").css("display", "none");
  if (allQuestions.length > 0) {
    if (allQuestions[0].category.includes("false")) {
      $(`ul li:nth-child(${counter})`).css(
        "backgroundImage",
        "url(./images/truecoin.png)"
      );
      console.log("clicked on false - if");
      addSolution();
      allQuestions.shift();

      setTimeout(function() {
        $(".solution").css("display", "none");
        $(".true").css("display", "flex");
        $(".false").css("display", "flex");
        updateQuestion();
        GameOver();
        Win();
      }, 4500);
    } else {
      $(`ul li:nth-child(${counter})`).css(
        "backgroundImage",
        "url(./images/shitcoin.png)"
      );
      //console.log("clicked on false - else");
      addSolution();
      allQuestions.shift();
      errorCounter++;
      setTimeout(function() {
        $(".solution").css("display", "none");
        $(".true").css("display", "flex");
        $(".false").css("display", "flex");
        updateQuestion();
        GameOver();
        Win();
      }, 4500);
    }
  }
});

// QUESTION IS TRUE
$(".true").click(function() {
  $(".true").css("display", "none");
  $(".false").css("display", "none");
  if (allQuestions[0].category.includes("true")) {
    $(`ul li:nth-child(${counter})`).css(
      "backgroundImage",
      "url(./images/truecoin.png)"
    );
    addSolution();
    console.log("clicked on true - if");
    allQuestions.shift();

    setTimeout(function() {
      $(".solution").css("display", "none");
      $(".true").css("display", "flex");
      $(".false").css("display", "flex");
      updateQuestion();
      GameOver();
      Win();
    }, 4500);
  } else {
    // CLICKED ON TRUE BUT WRONG ANWSER
    $(`ul li:nth-child(${counter})`).css(
      "backgroundImage",
      "url(./images/shitcoin.png)"
    );
    addSolution();
    allQuestions.shift();
    console.log("clicked on true - else");

    errorCounter++;

    setTimeout(function() {
      $(".solution").css("display", "none");
      $(".true").css("display", "flex");
      $(".false").css("display", "flex");
      updateQuestion();
      GameOver();
      Win();
    }, 4500);
  }
});

function GameOver() {
  if (errorCounter >= 3) {
    $(".game-end").css("display", "block");
  }
}

function Win() {
  if (allQuestions.length === 5 && errorCounter < 3) {
    $(".win").css("display", "block");
  }
}

// STEPS :
// Validate the question (true/false)
// Put the right coin in the wallet
// display the pop-up
// update all counters
// update the question
