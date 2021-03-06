import cards from "./card.hbs";
import menu from "./menu.json";

const menuContainer = document.querySelector(".js-menu");
const cardsMarkup = createMenuMarkup(menu);

menuContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createMenuMarkup(menu) {
  return cards(menu);
}

import "./theme";
