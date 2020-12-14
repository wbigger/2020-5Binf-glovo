console.log("ciao")

var init = function() {
  // Cambio il titolo della pagina, per prova
  // Attenzione: usare un tag senza parentesi angolari trova
  // tutti gli elementi della pagina con quel tag
  $("title").text("MyGlovo");

  // Creo un _nuovo_ elemento, con tag div e classe menu_card
  // Nota: quando uso le parentesi angolari creo un nuovo elemento
  let menu_card = $("<div>").addClass("menu_card");
  // TODO: aggiungere tutti i sottoelementi di menu_card
  // - per aggiungere una classe: addClass()
  // - per aggiungere un qualsiasi altro attributo: attr(), ad esempio attr('src', 'margherita.png');
  // - per aggiungere il contenuto di un elemento: text(), ad esempio text("Margherita")


  // let menu_img = $("<img>")



  // Affinché l'elemento possa essere visualizzato nella pagina, devo inserirlo da qualche parte. Nel nostro caso lo
  // aggiungiamo alla fine (append) dell'elemento con classe "flexcontainer".
  $(".flexcontainer").append(menu_card);

  


}

$(document).ready(init);