function init() {
  import("./index.collections.js");
  import("./index.limited-offer.js");
  import("./index.new-arrivals.js");
  import("./index.newsletter.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
