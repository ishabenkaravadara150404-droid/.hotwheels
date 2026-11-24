/* ==========================================================================
   HOT WHEELS - SPEED SHOP
   File: script.js
   Description: Simple and clean JavaScript for Cart, Wishlist, Search, 
                Filters, Sorting, and Form Validations.
   Author: First Year BCA Student Project
   ========================================================================== */

// ==========================================================================
// 1. LOCAL STORAGE HELPER FUNCTIONS FOR CART & WISHLIST
// ==========================================================================

// Function to get the cart array from browser localStorage
function getCart() {
  const storedCart = localStorage.getItem('speed_shop_cart');
  if (storedCart) {
    return JSON.parse(storedCart); // Convert JSON string back to JavaScript array
  } else {
    return []; // Return empty array if no cart exists yet
  }
}

// Function to save the cart array into browser localStorage
function saveCart(cart) {
  localStorage.setItem('speed_shop_cart', JSON.stringify(cart));
  updateNavbarCartCount(); // Update the number badge on the cart icon in navbar
}

// Function to get the wishlist array from localStorage
function getWishlist() {
  const storedWishlist = localStorage.getItem('speed_shop_wishlist');
  return storedWishlist ? JSON.parse(storedWishlist) : [];
}

// Function to save wishlist into localStorage
function saveWishlist(wishlist) {
  localStorage.setItem('speed_shop_wishlist', JSON.stringify(wishlist));
}

// Function to update the number of items shown on the cart icon in the navbar
function updateNavbarCartCount() {
  const cart = getCart();
  // Count total quantity of all items in cart
  let totalItems = 0;
  for (let i = 0; i < cart.length; i++) {
    totalItems += cart[i].quantity;
  }

  // Update all badge elements with class 'cart-count-badge'
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(function(badge) {
    badge.textContent = totalItems;
  });
}

// Simple floating notification message (Toast)
function showNotification(message) {
  // Remove existing toast if present
  const existing = document.querySelector('.speed-toast');
  if (existing) {
    existing.remove();
  }

  // Create new toast element
  const toast = document.createElement('div');
  toast.className = 'speed-toast';
  toast.innerHTML = `<i class="fa-solid fa-fire text-warning"></i> <span>${message}</span>`;
  document.body.appendChild(toast);

  // Automatically remove toast after 3 seconds
  setTimeout(function() {
    toast.remove();
  }, 3000);
}

// ==========================================================================
// 2. CART ACTIONS (ADD, REMOVE, CHANGE QUANTITY)
// ==========================================================================

// Function to add a product to the cart
function addToCart(productId, qtyToAdd = 1) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();

  // Check if product is already in the cart
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
      cart[i].quantity += qtyToAdd; // Increase quantity
      found = true;
      break;
    }
  }

  // If not in cart, add new item object
  if (!found) {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      scale: product.scale,
      quantity: qtyToAdd
    });
  }

  // Save updated cart to localStorage
  saveCart(cart);
  showNotification(product.name + " added to your cart!");

  // If currently on cart page, re-render the cart table
  if (window.location.pathname.includes('cart.html')) {
    displayCartPage();
  }
}

// Function to remove an item completely from the cart
function removeFromCart(productId) {
  let cart = getCart();
  // Filter out the item with matching id
  cart = cart.filter(function(item) {
    return item.id !== productId;
  });

  saveCart(cart);
  showNotification("Item removed from cart");

  if (window.location.pathname.includes('cart.html')) {
    displayCartPage();
  }
}

// Function to increase or decrease item quantity by +1 or -1
function changeQuantity(productId, change) {
  const cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart[i].quantity += change;
      // If quantity drops below 1, remove product
      if (cart[i].quantity <= 0) {
        removeFromCart(productId);
        return;
      }
      break;
    }
  }

  saveCart(cart);
  if (window.location.pathname.includes('cart.html')) {
    displayCartPage();
  }
}

// ==========================================================================
// 3. WISHLIST TOGGLE FUNCTION
// ==========================================================================

function toggleWishlist(productId) {
  const wishlist = getWishlist();
  const index = wishlist.indexOf(productId);

  if (index > -1) {
    // Already in wishlist, so remove it
    wishlist.splice(index, 1);
    showNotification("Removed from Wishlist");
  } else {
    // Not in wishlist, so add it
    wishlist.push(productId);
    showNotification("Saved to Wishlist!");
  }

  saveWishlist(wishlist);
  updateWishlistButtons();
}

function updateWishlistButtons() {
  const wishlist = getWishlist();
  const buttons = document.querySelectorAll('.wishlist-btn');

  buttons.forEach(function(btn) {
    const id = parseInt(btn.getAttribute('data-id'));
    if (wishlist.includes(id)) {
      btn.classList.add('active');
      btn.innerHTML = '<i class="fa-solid fa-heart text-danger"></i>';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  });
}

// ==========================================================================
// 4. HTML BUILDER FOR PRODUCT CARDS
// ==========================================================================

function createProductCardHTML(product) {
  return `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div class="product-card">
        <div class="product-card-img-container">
          <span class="product-category-tag">${product.category}</span>
          <button class="wishlist-btn" data-id="${product.id}" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
            <i class="fa-regular fa-heart"></i>
          </button>
          <img src="${product.image}" alt="${product.name}" class="product-card-img" onerror="this.src='https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80'">
        </div>
        
        <div class="product-body">
          <h3 class="product-name">
            <a href="product.html?id=${product.id}">${product.name}</a>
          </h3>
          <div class="product-rating">
            <i class="fa-solid fa-star"></i> ${product.rating} <span>(${product.scale})</span>
          </div>
          <div class="product-price-box">
            <span class="current-price">₹${product.price}</span>
            <span class="original-price">₹${product.originalPrice}</span>
          </div>
          
          <div class="product-actions">
            <button class="btn-add-cart" onclick="addToCart(${product.id})">
              <i class="fa-solid fa-cart-shopping me-1"></i> Add To Cart
            </button>
            <a href="product.html?id=${product.id}" class="btn-view-details" title="View Specifications">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 5. HOME PAGE LOGIC (index.html)
// ==========================================================================

function initHomePage() {
  const featuredContainer = document.getElementById('featured-cars-container');
  if (featuredContainer) {
    // Get cars marked as isFeatured
    const featuredCars = products.filter(function(p) { return p.isFeatured; }).slice(0, 4);
    featuredContainer.innerHTML = featuredCars.map(createProductCardHTML).join('');
  }

  const popularContainer = document.getElementById('popular-cars-container');
  if (popularContainer) {
    // Get cars marked as isPopular
    const popularCars = products.filter(function(p) { return p.isPopular; }).slice(0, 4);
    popularContainer.innerHTML = popularCars.map(createProductCardHTML).join('');
  }

  updateWishlistButtons();
}

// ==========================================================================
// 6. SHOP PAGE LOGIC (shop.html - SEARCH, CATEGORY, SORTING)
// ==========================================================================

let currentCategory = "All";
let currentSearch = "";
let currentSort = "default";

function initShopPage() {
  // Check if a category was passed in the URL (e.g. shop.html?category=Muscle%20Cars)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    currentCategory = catParam;
  }

  // Highlight active filter pill
  const filterButtons = document.querySelectorAll('.filter-pill-btn');
  filterButtons.forEach(function(btn) {
    if (btn.getAttribute('data-category').toLowerCase() === currentCategory.toLowerCase()) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    // Add click event for category filtering
    btn.addEventListener('click', function() {
      filterButtons.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderShopProducts();
    });
  });

  // Search input event listener
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      currentSearch = e.target.value.toLowerCase().trim();
      renderShopProducts();
    });
  }

  // Sort dropdown event listener
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function(e) {
      currentSort = e.target.value;
      renderShopProducts();
    });
  }

  // Render initial list
  renderShopProducts();
}

function renderShopProducts() {
  const container = document.getElementById('shop-products-container');
  const countLabel = document.getElementById('results-count');
  if (!container) return;

  // 1. Filter by Category
  let filtered = products;
  if (currentCategory !== "All") {
    filtered = filtered.filter(function(p) {
      return p.category.toLowerCase() === currentCategory.toLowerCase();
    });
  }

  // 2. Filter by Search Query
  if (currentSearch !== "") {
    filtered = filtered.filter(function(p) {
      return p.name.toLowerCase().includes(currentSearch) ||
             p.category.toLowerCase().includes(currentSearch);
    });
  }

  // 3. Sort by Selection
  let sorted = [...filtered]; // Copy array
  if (currentSort === "price-low") {
    sorted.sort(function(a, b) { return a.price - b.price; });
  } else if (currentSort === "price-high") {
    sorted.sort(function(a, b) { return b.price - a.price; });
  } else if (currentSort === "popular") {
    sorted.sort(function(a, b) { return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0); });
  }

  // Update product count label
  if (countLabel) {
    countLabel.textContent = `Showing ${sorted.length} Hot Wheels cars`;
  }

  // Display results or empty state
  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fa-solid fa-car-burst text-warning fs-1 mb-3"></i>
        <h4 class="brand-font">No Cars Found</h4>
        <p class="text-muted">No cars match your search or filter criteria. Try choosing 'All' categories.</p>
      </div>
    `;
  } else {
    container.innerHTML = sorted.map(createProductCardHTML).join('');
  }

  updateWishlistButtons();
}

// ==========================================================================
// 7. PRODUCT DETAILS PAGE LOGIC (product.html)
// ==========================================================================

function initProductDetailsPage() {
  // Read ?id= from URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 1; // Default to car ID 1 if not specified

  const product = getProductById(productId);

  if (!product) {
    document.getElementById('product-details-content').innerHTML = `
      <div class="text-center py-5">
        <h3 class="text-danger">Product Not Found!</h3>
        <p>The selected car does not exist.</p>
        <a href="shop.html" class="btn btn-racing">Back to Shop</a>
      </div>
    `;
    return;
  }

  // Fill in all product details on the page
  document.title = product.name + " | Hot Wheels Speed Shop";
  document.getElementById('product-title').textContent = product.name;
  document.getElementById('product-category').textContent = product.category;
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-image').alt = product.name;
  document.getElementById('product-price').textContent = "₹" + product.price;
  document.getElementById('product-original-price').textContent = "₹" + product.originalPrice;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-scale').textContent = product.scale;
  document.getElementById('product-series').textContent = product.series;
  document.getElementById('product-material').textContent = product.material;
  document.getElementById('product-rating').innerHTML = `<i class="fa-solid fa-star text-warning"></i> ${product.rating} / 5.0`;

  // Quantity Stepper buttons
  const qtyInput = document.getElementById('detail-qty-input');
  const btnMinus = document.getElementById('qty-minus');
  const btnPlus = document.getElementById('qty-plus');

  if (btnMinus && btnPlus && qtyInput) {
    btnMinus.onclick = function() {
      let currentVal = parseInt(qtyInput.value);
      if (currentVal > 1) {
        qtyInput.value = currentVal - 1;
      }
    };
    btnPlus.onclick = function() {
      let currentVal = parseInt(qtyInput.value);
      qtyInput.value = currentVal + 1;
    };
  }

  // Add to cart button
  const addBtn = document.getElementById('detail-add-btn');
  if (addBtn) {
    addBtn.onclick = function() {
      const qty = parseInt(qtyInput.value) || 1;
      addToCart(product.id, qty);
    };
  }
}

// ==========================================================================
// 8. SHOPPING CART PAGE LOGIC (cart.html)
// ==========================================================================

function displayCartPage() {
  const cartTableBody = document.getElementById('cart-table-body');
  const emptyCartBox = document.getElementById('empty-cart-message');
  const cartContent = document.getElementById('cart-content-row');

  if (!cartTableBody || !emptyCartBox || !cartContent) return;

  const cart = getCart();

  // If cart is empty, show friendly empty cart message
  if (cart.length === 0) {
    cartContent.style.display = 'none';
    emptyCartBox.style.display = 'block';
    return;
  }

  // Otherwise, show the cart table
  cartContent.style.display = 'flex';
  emptyCartBox.style.display = 'none';

  let subtotal = 0;

  // Build rows for each product in the cart
  let rowsHTML = "";
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    rowsHTML += `
      <tr>
        <td>
          <div class="d-flex align-items-center gap-3">
            <img src="${item.image}" alt="${item.name}" class="cart-thumbnail" onerror="this.src='https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80'">
            <div>
              <div class="fw-bold text-white">${item.name}</div>
              <small class="text-muted">${item.category} • ${item.scale}</small>
            </div>
          </div>
        </td>
        <td class="fw-bold text-warning">₹${item.price}</td>
        <td>
          <div class="quantity-control">
            <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
            <input type="text" class="quantity-input" value="${item.quantity}" readonly>
            <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
        </td>
        <td class="fw-bold text-white">₹${itemTotal}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})" title="Remove">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  }

  cartTableBody.innerHTML = rowsHTML;

  // Free shipping over ₹999, else ₹99
  const shipping = subtotal >= 999 ? 0 : 99;
  const grandTotal = subtotal + shipping;

  document.getElementById('summary-subtotal').textContent = "₹" + subtotal;
  document.getElementById('summary-shipping').textContent = shipping === 0 ? "FREE" : "₹" + shipping;
  document.getElementById('summary-total').textContent = "₹" + grandTotal;
}

// Simulated checkout function
function performSimulatedCheckout() {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Your cart is empty! Please add some cars first.");
    return;
  }

  // Simple simulated prompt
  const customerName = prompt("Simulated Checkout: Please enter your name to confirm order:");
  if (customerName && customerName.trim() !== "") {
    // Generate random Order ID
    const randomOrderId = "HW-" + Math.floor(100000 + Math.random() * 900000);
    alert(`Order Placed Successfully!\n\nThank you, ${customerName}!\nOrder ID: ${randomOrderId}\nPayment Mode: Cash on Delivery (Simulated)\n\nNote: This is a BCA student project demonstration.`);
    
    // Clear cart in localStorage
    localStorage.removeItem('speed_shop_cart');
    updateNavbarCartCount();
    displayCartPage();
  }
}

// ==========================================================================
// 9. FORM VALIDATIONS (CONTACT & NEWSLETTER)
// ==========================================================================

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page from reloading

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const alertBox = document.getElementById('contact-alert');

    // Validation 1: Name length
    if (name.length < 3) {
      alertBox.className = "alert alert-danger mt-3";
      alertBox.textContent = "Please enter a valid name (at least 3 characters).";
      alertBox.style.display = "block";
      return;
    }

    // Validation 2: Email format check
    if (!email.includes('@') || !email.includes('.')) {
      alertBox.className = "alert alert-danger mt-3";
      alertBox.textContent = "Please enter a valid email address.";
      alertBox.style.display = "block";
      return;
    }

    // Validation 3: Subject
    if (subject === "") {
      alertBox.className = "alert alert-danger mt-3";
      alertBox.textContent = "Please choose a subject for your message.";
      alertBox.style.display = "block";
      return;
    }

    // Validation 4: Message length
    if (message.length < 10) {
      alertBox.className = "alert alert-danger mt-3";
      alertBox.textContent = "Your message should be at least 10 characters long.";
      alertBox.style.display = "block";
      return;
    }

    // If all valid, display success message
    alertBox.className = "alert alert-success mt-3";
    alertBox.innerHTML = `
      <strong>Message Sent Successfully!</strong><br>
      Thank you, ${name}. Your message has been received.<br>
      <small><em>(Front-End Project Demonstration: No real email is sent to a server.)</em></small>
    `;
    alertBox.style.display = "block";

    contactForm.reset();
  });
}

function initNewsletterForm() {
  const newsletterForm = document.getElementById('newsletter-form');
  if (!newsletterForm) return;

  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    if (!emailInput) return;

    const email = emailInput.value.trim();
    if (!email.includes('@') || !email.includes('.')) {
      alert("Please enter a valid email address for newsletter subscription.");
      return;
    }

    alert("Thank you for subscribing to Hot Wheels Speed Shop newsletter!");
    emailInput.value = "";
  });
}

// ==========================================================================
// 10. GLOBAL PAGE ROUTER & INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
  // Always update cart count in navbar on all pages
  updateNavbarCartCount();
  initNewsletterForm();

  // Detect current page from file name
  const path = window.location.pathname;

  if (path.includes('shop.html')) {
    initShopPage();
  } else if (path.includes('product.html')) {
    initProductDetailsPage();
  } else if (path.includes('cart.html')) {
    displayCartPage();
    const checkoutBtn = document.getElementById('btn-checkout');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', performSimulatedCheckout);
    }
  } else if (path.includes('contact.html')) {
    initContactForm();
  } else {
    // Default to Home page (index.html)
    initHomePage();
  }
});
