{
  const hidingAnElement = () => {
    const questions = document.querySelector(".questions");
    const questionsChangeWord = document.querySelector(".questionsChangeWord");

    questions.classList.toggle("questinsHideContainer");
    questionsChangeWord.innerText = questions.classList.contains("questinsHideContainer") ? "Pokaż" : "Ukryj";
  };

  const init = () => {
    const questionsButton = document.querySelector(".questionsButton");

    questionsButton.addEventListener("click", hidingAnElement);
  };

  init();
}

{
  const onBackgroundButtonChange = () => {
    const mainContainerBackground = document.querySelector(".mainContainerBackground");
    const backgroundChangeWord = document.querySelector(".backgroundChangeWord");
    
    mainContainerBackground.classList.toggle("mainBackground");
    backgroundChangeWord.innerText = mainContainerBackground.classList.contains("mainBackground") ? "jasne" : "ciemne";
  };

  const init = () => {
    const backgroundButton = document.querySelector(".backgroundButton");  

    backgroundButton.addEventListener("click", onBackgroundButtonChange); 

  };

  init();
}
