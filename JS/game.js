const headerInput = document.querySelector(".content-game__header input");
const formInput = document.querySelector(".content-game__form input");
const formButton = document.querySelector(".content-game__form button");
const formSpan = document.querySelector(".content-game__form span:last-child");
const result = document.querySelector(".content-game__result span");

function buttonClick(event) {
  event.preventDefault();
  const range = headerInput.value;
  const userValue = parseInt(formInput.value);
  const computerValue = Math.ceil(Math.random() * range);

  formSpan.innerText = `You Chose : ${userValue},  the Computer Chose : ${computerValue}`;

  if (computerValue < userValue) return (result.innerText = `WIN🔥`);
  if (computerValue === userValue) return (result.innerText = `DRAW🔥`);
  else return (result.innerText = `LOST🔥`);
}

formButton.addEventListener("click", buttonClick);
