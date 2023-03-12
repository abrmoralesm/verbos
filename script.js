
document.addEventListener("DOMContentLoaded", () => {
  const verbs = [
    {
      infinitive: "to be",
      pastSimple: "was / were",
      meaning: "ser o estar",
    },
    {
      infinitive: "buy",
      pastSimple: "bought",
      meaning: "comprar",
    },
    {
      infinitive: "come",
      pastSimple: "came",
      meaning: "venir / entrar",
    },
       {
      infinitive: "do",
      pastSimple: "did",
      meaning: "fer",
    },
      {
      infinitive: "draw",
      pastSimple: "drew",
      meaning: "dibuixar",
    },
       {
      infinitive: "drink",
      pastSimple: "drank",
      meaning: "beure",
    },
     {
      infinitive: "eat",
      pastSimple: "ate",
      meaning: "menjar",
    },
      {
      infinitive: "fall",
      pastSimple: "fell",
      meaning: "caure",
    },
      {
      infinitive: "fell",
      pastSimple: "felt",
      meaning: "sentir",
    },
       {
      infinitive: "get",
      pastSimple: "got",
      meaning: "obtenir",
    },
    // Añadir más verbos aquí
  ];

  const checkBtns = document.querySelectorAll(".check-btn");
  const results = document.querySelectorAll(".result");
  const resetBtn = document.querySelector("#reset-btn");

function checkVerb(verb, index) {
  let pastInput, meaningInput;
  
  if (verb.infinitive === "to be") {
    pastInput = document.querySelector("#to-be-past-input");
    meaningInput = document.querySelector("#to-be-meaning-input");
  } else {
    pastInput = document.querySelector(`#${verb.infinitive}-past-input`);
    meaningInput = document.querySelector(`#${verb.infinitive}-meaning-input`);
  }

  if (pastInput && meaningInput) {
    const pastValue = pastInput.value.trim().toLowerCase();
    const meaningValue = meaningInput.value.trim().toLowerCase();

    if (pastValue === verb.pastSimple && meaningValue === verb.meaning) {
      results[index].innerHTML = "💃 ";
      results[index].classList.add("show","correct");
    } else {
      results[index].innerHTML = "💩 ";
      results[index].classList.add("show","incorrect");
    }
  }
}


  function resetResults() {
  results.forEach((result) => {
    result.textContent = "";
    result.classList.remove("correct", "incorrect");
  });

  const pastInputs = document.querySelectorAll("input[type='text'][id$='-past-input']");
  const meaningInputs = document.querySelectorAll("input[type='text'][id$='-meaning-input']");

  pastInputs.forEach((input) => {
    input.value = "";
  });

  meaningInputs.forEach((input) => {
    input.value = "";
  });
}

  checkBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      checkVerb(verbs[i], i);
    });
  });

  resetBtn.addEventListener("click", () => {
    resetResults();
  });
});






