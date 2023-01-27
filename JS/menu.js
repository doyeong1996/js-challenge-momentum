const menuButton = document.querySelector(".menu-trigger");
const menuList = document.querySelector("#content_menu_list");
const menuListDiv = menuList.querySelector("div");

function paintList(listObj) {
  menuListDiv.id = listObj.id;
}

function divClick() {
  const divValue = menuListDiv.value;
  const listObj = {
    text: divValue,
    id: Date.now(),
  };
  paintList(listObj);
}

function buttonClick() {
  menuButton.classList.toggle("active-1");
  menuList.classList.toggle("hidden");
}

menuButton.addEventListener("click", buttonClick);
menuListDiv.addEventListener("click", divClick);
