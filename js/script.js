{
  const hidingAnElement = () => {
    let questions = document.querySelector(".questions");
    let questionsChangeWord = document.querySelector(".questionsChangeWord");

    questions.classList.toggle("questinsHideContainer");
    questionsChangeWord.innerText = questions.classList.contains("questinsHideContainer") ? "Pokaż" : "Ukryj";
  };

  const init = () => {
    let questionsButton = document.querySelector(".questionsButton");

    questionsButton.addEventListener("click", hidingAnElement);
  };

  init();
}

{
  const onBackgroundButtonChange = () => {
    let mainContainerBackground = document.querySelector(".mainContainerBackground");
    let backgroundChangeWord = document.querySelector(".backgroundChangeWord");
    
    mainContainerBackground.classList.toggle("mainBackground");
    backgroundChangeWord.innerText = mainContainerBackground.classList.contains("mainBackground") ? "jasne" : "ciemne";
  };

  const init = () => {
  let backgroundButton = document.querySelector(".backgroundButton");  

  backgroundButton.addEventListener("click", onBackgroundButtonChange); 

  };

  init();
}
