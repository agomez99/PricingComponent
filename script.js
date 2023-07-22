const toggle = document.getElementById("toggle");
const basicPrice = document.getElementById("basicPrice");
const professionalPrice = document.getElementById("proPrice");
const masterPrice = document.getElementById("masterPrice");

function setPrices(){
  basicPrice.textContent = toggle.checked ? "$19.99" : "$199.99";
  professionalPrice.textContent = toggle.checked ? "$24.99" : "$249.99";
  masterPrice.textContent = toggle.checked ? "$39.99" : "$399.99";
}

setPrices();

toggle.addEventListener("change", setPrices);

