const menuButton = document.querySelector(".menu-trigger");
const menuList = document.querySelector("#content_menu_list");
const menuListDiv = menuList.querySelector("div");

function paintList(listObj) {
  menuListDiv.id = listObj.id;
}

function divClick() {
  // div가 클릭되었을때 랜덤한 id를 부여하는 함수
  const divValue = menuListDiv.value;
  const listObj = {
    text: divValue,
    id: Date.now(),
  };
  paintList(listObj); //listobj를 인자로
}

function buttonClick() {
  menuButton.classList.toggle("active-1"); //toggle 클릭시 함수 on 한번 더 클릭시 전의값으로 돌아간다.
  menuList.classList.toggle("hidden"); //toggle 클릭시 함수 on 한번 더 클릭시 전의값으로 돌아간다.
}

menuButton.addEventListener("click", buttonClick);
menuListDiv.addEventListener("click", divClick);
