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
      "<div class='sol'><p>True! James Howell lost 7.500 Bitcoins ($20 million) by throwing away his hard drive while cleaning his house.</p></div>"
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
      "<div class='sol'><p>The Bitnation project already hosted the world’s first blockchain birth certificate and World Citizenship.</p></div>"
  },
  {
    question: "Cryptokitties are a cool version of Pokemons.",
    category: "true",
    solution:
      "<div class='sol'><p>Go and see how kawai they are compared to old Pokemons!</p></div>"
  }
];

var counter = 0;
var errorCounter = 0;

var sounds = [
  new Audio("./sounds/nyah.mp3"),
  new Audio("./sounds/pop.mp3"),
  new Audio("./sounds/shit.mp3"),
  new Audio("./sounds/questions.mp3")
];

// to pick random questions

function randomQuestions() {
  var numQuest = allQuestions.length;

  while (numQuest > 0) {
    var index = Math.floor(Math.random() * numQuest);
    numQuest--;

    var tempQuest = allQuestions[numQuest];
    allQuestions[numQuest] = allQuestions[index];
    allQuestions[index] = tempQuest;
  }
}

randomQuestions();
updateQuestion();

// to display the chosen question

function updateQuestion() {
  counter++;
  if (allQuestions.length > 0) {
    var oneQuest = allQuestions[0];
    $(".question").html(oneQuest.question);
  }
}

// to display the solution
function addSolution() {
  var oneQuest = allQuestions[0];
  $(".solution").html(oneQuest.solution);
  $(".solution").css("display", "flex");
}

$(".false").click(function() {
  sounds[0].play();

  $(".left-side").css("display", "flex");
  $(".question")
    .addClass("col-6")
    .removeClass("col-12");
  $(".solution").addClass("col-6");

  $(".true").css("display", "none");
  $(".false").css("display", "none");

  setTimeout(function() {
    $(".question")
      .removeClass("col-6")
      .addClass("col-12");
    $(".solution").removeClass("col-6");
  }, 4000);

  if (allQuestions.length > 0) {
    if (allQuestions[0].category.includes("false")) {
      sounds[1].play();

      $(`ul li:nth-child(${counter})`).css(
        "backgroundImage",
        "url(./images/truecoin.png)"
      );

      addSolution();
      allQuestions.shift();

      setTimeout(function() {
        $(".solution").css("display", "none");
        $(".true").css("display", "flex");
        $(".false").css("display", "flex");
        updateQuestion();
        GameOver();
        Win();
      }, 4000);
    } else {
      sounds[2].play();
      $(`ul li:nth-child(${counter})`).css(
        "backgroundImage",
        "url(./images/shitcoin.png)"
      );

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
      }, 4000);
    }
  }
});

$(".true").click(function() {
  sounds[3].play();
  $(".left-side").css("display", "flex");
  $(".question")
    .addClass("col-6")
    .removeClass("col-12");
  $(".solution").addClass("col-6");
  $(".true").css("display", "none");
  $(".false").css("display", "none");
  setTimeout(function() {
    $(".question")
      .removeClass("col-6")
      .addClass("col-12");
    $(".solution").removeClass("col-6");
  }, 4000);
  if (allQuestions[0].category.includes("true")) {
    sounds[1].play();
    $(`ul li:nth-child(${counter})`).css(
      "backgroundImage",
      "url(./images/truecoin.png)"
    );
    addSolution();
    //console.log("clicked on true - if");
    allQuestions.shift();

    setTimeout(function() {
      $(".solution").css("display", "none");
      $(".true").css("display", "flex");
      $(".false").css("display", "flex");
      updateQuestion();
      GameOver();
      Win();
    }, 4000);
  } else {
    sounds[2].play();
    $(`ul li:nth-child(${counter})`).css(
      "backgroundImage",
      "url(./images/shitcoin.png)"
    );
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
    }, 4000);
  }
});

function GameOver() {
  if (errorCounter >= 3) {
    $(".game-end").css("display", "flex");
    disableBtn();
  }
}

function Win() {
  if (allQuestions.length === 5 && errorCounter < 3) {
    $(".win").css("display", "flex");
    disableBtn();
  }
}

function disableBtn() {
  return $(".btn-blocked").prop("disabled", true);
}

function enableBtn() {
  return $(".btn-blocked").prop("disabled", false);
}
