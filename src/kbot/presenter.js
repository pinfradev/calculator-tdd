const KBot = require('./kbot')

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#saludo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const kBot = new KBot()
  
  div.innerHTML = "<p>" + kBot.saludar(nombre.value) + "</p>";
});
