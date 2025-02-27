function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-text", {
    strings: "Poem goes here",
    autoStart: true,
    cursor: null,
  });
}

let formElement = document.querySelector("#form-text-input");
formElement.addEventListener("submit", generatePoem);
