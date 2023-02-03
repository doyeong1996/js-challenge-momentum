const menuButton = document.querySelector(".menu-trigger");
const menuList = document.querySelector("#content_menu_list");
const randomGame = document.querySelector("#random-game");
const game = document.querySelector(".content-game");
function buttonClick() {
  menuButton.classList.toggle("active-1"); //toggle 클릭시 함수 on 한번 더 클릭시 전의값으로 돌아간다.
  menuList.classList.toggle("hidden"); //toggle 클릭시 함수 on 한번 더 클릭시 전의값으로 돌아간다.
  game.classList.add("hidden"); // x 표시 눌렀을경우 랜덤게임도 사라짐
}

function onRandomGame() {
  game.classList.toggle("hidden");
}
menuButton.addEventListener("click", buttonClick);
randomGame.addEventListener("click", onRandomGame);
