
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
        infinitive: "feel",
        pastSimple: "felt",
        meaning: "sentir",
      },
         {
        infinitive: "get",
        pastSimple: "got",
        meaning: "obtenir",
      },
      {
        infinitive: "give",
        pastSimple: "gave",
        meaning: "donar",
      },
      {
        infinitive: "go",
        pastSimple: "went",
        meaning: "anar",
      },
      {
        infinitive: "have",
        pastSimple: "had",
        meaning: "tenir",
      },
      {
        infinitive: "hear",
        pastSimple: "heard",
        meaning: "sentir",
      },
      {
        infinitive: "know",
        pastSimple: "knew",
        meaning: "saber",
      },
      {
        infinitive: "learn",
        pastSimple: "learned",
        meaning: "aprendre",
      },
      {
        infinitive: "leave",
        pastSimple: "left",
        meaning: "deixar / anar-se",
      },
      {
        infinitive: "lose",
        pastSimple: "lost",
        meaning: "perdre",
      },
      {
        infinitive: "make",
        pastSimple: "made",
        meaning: "fer / construir",
      },
      {
        infinitive: "read",
        pastSimple: "read",
        meaning: "llegir",
      },
      {
        infinitive: "run",
        pastSimple: "ran",
        meaning: "córrer",
      },
      {
        infinitive: "see",
        pastSimple: "saw",
        meaning: "veure",
      },
      {
        infinitive: "sit",
        pastSimple: "sat",
        meaning: "seure",
      },
      {
        infinitive: "steal",
        pastSimple: "stole",
        meaning: "robar",
      },
      {
        infinitive: "swim",
        pastSimple: "swam",
        meaning: "nedar",
      }
      // Añadir más verbos aquí
      //OK papi💝
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
        results[index].innerHTML = "you're amazing 🙀 ";
        results[index].classList.add("show","correct");
      } else {
        results[index].innerHTML = "<span  class='parpadeo'>you're really stupid 😿</span> ";
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
