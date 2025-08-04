// auth.js - handles user session and navbar updates
function updateNavUser() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const accountLink = document.getElementById('accountLink');

  if (!accountLink) return; // In case page doesn't have the element

  if (currentUser) {
    accountLink.innerHTML = `
      <span class="welcome-user">Welcome, ${currentUser.username}</span>
      <button class="logout-btn" id="logoutBtn">Logout</button>
    `;
    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.reload();
    });
  } else {
    accountLink.innerHTML = `<a href="login.html">Sign Up / Login</a>`;
  }
}

// Redirect logged-in users away from login page
function redirectIfLoggedIn() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser && window.location.pathname.includes("login.html")) {
    window.location.href = "index.html";
  }
}

// Update cart count
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + parseInt(item.quantity || 0), 0);
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) cartCountElement.textContent = totalItems || 0;
}

window.addEventListener('load', () => {
  updateNavUser();
  updateCartCount();
  redirectIfLoggedIn();
});
