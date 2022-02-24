// variable for quantity
let quantity = 1;

// Buttons
let quantityDown = document.querySelector("#quantity-down");
let quantityUp = document.querySelector("#quantity-up");

// - button config
quantityDown.addEventListener("click", function (e) {
  if (quantity > 0) {
    quantity--;
  }
  updateQuantity(`Quantity: ${quantity}`);
});

// + button config
quantityUp.addEventListener("click", function () {
  quantity++;
  updateQuantity(`Quantity: ${quantity}`);
});

// update Total Quantity
function updateQuantity(displayQuantity) {
  let quantity = document.querySelector(".total-quantity");
  quantity.innerHTML = displayQuantity;
}
