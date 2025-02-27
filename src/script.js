function displayPoem(response) {
  console.log("Poem generated");

  new Typewriter("#poem-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let apiKey = "f2c0f64fea8a97035ob72fc34f61t3e3";
  let context = `You are a romantic poem expert. Your mission is to generate a 6 line poem. Format: HTML separate each line with a <br />. Do not put <br /> after the last text line of the poem. No title. Please behave.`;
  let prompt = `Generate an english poem with the word ${userInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#form-text-input");
formElement.addEventListener("submit", generatePoem);
