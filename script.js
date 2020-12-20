console.log("ciao")

var init = function() {
  // Cambio il titolo della pagina, per prova
  // Attenzione: usare un tag senza parentesi angolari trova
  // tutti gli elementi della pagina con quel tag
  $("title").text("MyGlovo");

  let p = {
    img_url: 'margherita.jpg',
    desc: 'Margherita',
    categ: ["Vegetariana"],
    price: 7.00
  }

  let pizzas = [
    p
  ]
for (pizza of pizzas) {
  // Creo un _nuovo_ elemento, con tag div e classe menu_card
  // Nota: quando uso le parentesi angolari creo un nuovo elemento
  let menu_card = $("<div>").addClass("menu_card");
  let menu_img = $("<img>").attr('src', pizza.img_url);
  let menu_h3 = $("<h3>").text(pizza.desc);
  let menu_span = $("<span>").text(pizza.categ);
  let menu_categories = $("<div>").addClass("menu_categories");
  let menu_details = $("<div>").addClass("menu_details");
  let menu_price = $("<span>").addClass("menu_price").text("€"+pizza.price.toFixed(2));
  let menu_add = $("<button>").addClass("menu_add").text("+");

  menu_card
    .append(menu_img)
    .append(menu_h3)
    .append(
      menu_categories
      .append(menu_span))
    .append(
      menu_details
      .append(menu_price)
      .append(menu_add)
    );

  $(".flexcontainer").append(menu_card);
}

}

$(document).ready(init);