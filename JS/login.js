const loginForm = document.querySelector("#footer-login__form");
const loginInput = document.querySelector("#footer-login__form input");
const greething = document.querySelector("h1#greething");
const userAvarta = document.querySelector("#footer_useravatar");
const headerTitle = document.querySelector(".header-title");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreething(username);
}

function paintGreething(username) {
  greething.classList.remove(HIDDEN_CLASSNAME);
  userAvarta.classList.remove(HIDDEN_CLASSNAME);
  greething.innerText = `${username}`;
  greething.classList.add("animated", "rubberBand");
  headerTitle.classList.add("animated", "fadeInRight");
}
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreething(savedUserName);
}
