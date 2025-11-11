{
  let questions = document.querySelector(".questions");
  let questionsButton = document.querySelector(".questionsButton");
  let questionsChangeWord = document.querySelector(".questionsChangeWord");

  questionsButton.addEventListener("click", () => {
    questions.classList.toggle("questinsHideContainer");
    questionsChangeWord.innerText = questions.classList.contains(
      "questinsHideContainer"
    )
      ? "Pokaż"
      : "Ukryj";
  });
}

{
  let backgroundButton = document.querySelector(".backgroundButton");
  let backgroundChangeWord = document.querySelector(".backgroundChangeWord");
  let mainContainerBackground = document.querySelector(
    ".mainContainerBackground"
  );

  backgroundButton.addEventListener("click", () => {
    mainContainerBackground.classList.toggle("mainBackground");

    backgroundChangeWord.innerText = mainContainerBackground.classList.contains(
      "mainBackground"
    )
      ? "jasne"
      : "ciemne";
  });
}
