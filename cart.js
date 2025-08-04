// cart.js - shared across all pages

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Add to cart (auto-add quantity)
function addToCart(book) {
  const existing = cart.find(i => i.id === book.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    book.quantity = 1;
    cart.push(book);
  }
  saveCart();
}

// Remove item
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
}

// Update cart count
function updateCartCount() {
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cartData.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}
document.getElementById("checkoutBtn").addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  if (cart.length === 0) {
    alert("Your cart is empty. Add some books first!");
    return;
  }

  // Optionally: You can process payment here or redirect to a payment page
  alert("Thank you for your purchase! Your order has been placed.");

  // Clear cart
  localStorage.removeItem("cart");
  document.getElementById("cartItems").innerHTML = "";
  document.getElementById("cartTotal").innerHTML = "Total: $0.00";
  document.getElementById("cartCount").textContent = 0;
});


// Run on every page load
document.addEventListener('DOMContentLoaded', updateCartCount);






