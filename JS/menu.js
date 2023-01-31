const menuButton = document.querySelector(".menu-trigger");
const menuList = document.querySelector("#content_menu_list");
const menuListLi = menuList.querySelector("li");

function buttonClick() {
  menuButton.classList.toggle("active-1"); //toggle 클릭시 함수 on 한번 더 클릭시 전의값으로 돌아간다.
  menuList.classList.toggle("hidden"); //toggle 클릭시 함수 on 한번 더 클릭시 전의값으로 돌아간다.
}

menuButton.addEventListener("click", buttonClick);
