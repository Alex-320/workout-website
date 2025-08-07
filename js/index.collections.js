let women = $(".collections-nav>button:first");

let men = $(".collections-nav").children().eq(1); 

let shoes = $(".collections-nav>button:last"); 

let menContainer = $(".men__container");
let womenContainer = $(".women__container");
let shoesContainer = $(".shoes__container");

function showMen() {
  $(womenContainer).css("display", "none");
  $(shoesContainer).css("display", "none");
  $(menContainer).css("display", "block");
  $(men).addClass("border-bottom");
  $(women).removeClass("border-bottom");
  $(shoes).removeClass("border-bottom");
}

function showWomen() {
  $(womenContainer).css("display", "block");
  $(shoesContainer).css("display", "none");
  $(menContainer).css("display", "none");
  $(women).addClass("border-bottom");
  $(men).removeClass("border-bottom");
  $(shoes).removeClass("border-bottom");
}
function showShoes() {
  $(womenContainer).css("display", "none");
  $(shoesContainer).css("display", "block");
  $(menContainer).css("display", "none");
  $(shoes).addClass("border-bottom");
  $(men).removeClass("border-bottom");
  $(women).removeClass("border-bottom");
}
$(men).on("click", showMen);
$(women).on("click", showWomen);
$(shoes).on("click", showShoes);
