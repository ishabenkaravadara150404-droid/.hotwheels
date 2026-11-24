# 🏎️ Hot Wheels – Speed Shop
### A Front-End E-Commerce Website Project for First-Year BCA Students

> **Course:** Bachelor of Computer Applications (BCA)  
> **Subject:** Web Technologies / Front-End Web Development  
> **Built With:** HTML5, CSS3, Bootstrap 5 (CDN), and Vanilla JavaScript  

---

## 📌 1. Project Overview & Abstract

**Hot Wheels – Speed Shop** is a clean, responsive, and beginner-friendly e-commerce web template designed specifically as a **First-Year BCA College Project**. The website is inspired by the iconic **Hot Wheels** toy car brand, featuring an energetic racing theme with black, red, orange, yellow, and white colors.

The project demonstrates core front-end concepts taught in introductory computer applications courses:
- Writing semantic and well-structured **HTML5** markup.
- Creating clean, responsive layouts using **CSS3** and the **Bootstrap 5 CDN**.
- Implementing client-side interactivity using **Vanilla JavaScript (ES6)** without heavy or complex libraries.
- Managing user data locally using the browser's native **LocalStorage API** (for persistent cart and wishlist items).
- Handling user inputs with client-side **form validation**.

---

## 📂 2. Project Folder Structure

```text
hot-wheels-speed-shop/
│
├── index.html          # Home page with hero section, categories, featured and popular cars
├── shop.html           # Shop catalog with search, category filtering, and sorting
├── product.html        # Product details page with dynamic car data and specs table
├── cart.html           # Shopping cart page with quantity controls and simulated checkout
├── about.html          # About page explaining the brand story and project background
├── contact.html        # Contact form with JavaScript validation and project disclaimer
├── README.md           # Documentation, execution steps, and viva preparation guide
│
├── css/
│   └── style.css       # Clean, commented stylesheet for custom colors and racing styles
│
├── js/
│   ├── products.js     # JavaScript array containing 14 sample Hot Wheels products
│   └── script.js       # Simple JavaScript functions for cart, search, filter, and forms
│
└── images/             # Folder for custom image assets or local car pictures
```

---

## ⚙️ 3. Technologies Used

1. **HTML5**:
   - Used for the semantic layout of all web pages (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
   - Uses relative links for easy navigation between pages.

2. **CSS3**:
   - Custom styling with CSS variables for the color palette (black, dark gray, red, orange, yellow, white).
   - Clean card hover effects and racing gradients.
   - Google Fonts: `'Oswald'` (for bold headings) and `'Poppins'` (for clean, readable text).

3. **Bootstrap 5.3.3 (CDN)**:
   - Utilized for the responsive 12-column grid (`row`, `col-12`, `col-md-6`, `col-lg-4`).
   - Navigation bar collapse menu for mobile devices.
   - Clean UI buttons, form inputs, and spacing utilities.

4. **Vanilla JavaScript (ES6)**:
   - DOM manipulation using `document.getElementById()` and `document.querySelectorAll()`.
   - Event handling for clicks, live search input, and form submission.
   - Array methods: `filter()`, `map()`, and `find()`.
   - `localStorage` API for saving the shopping cart across page refreshes.

---

## 🚀 4. How to Run the Project Locally

No server, Node.js, Python, or database installation is required! You can run it directly on any computer:

### Method 1: Direct Double-Click (Easiest)
1. Open your File Explorer and navigate to the project directory:
   ```text
   hot-wheels-speed-shop/
   ```
2. Double-click on **`index.html`**.
3. It will open instantly in your default web browser (Google Chrome, Microsoft Edge, Firefox, or Brave).

### Method 2: VS Code Live Server (Recommended for Presentation)
1. Open Visual Studio Code.
2. Click **File > Open Folder...** and select `hot-wheels-speed-shop`.
3. Right-click on **`index.html`** and choose **"Open with Live Server"**.
4. The website will launch at `http://127.0.0.1:5500/index.html`.

---

## 💡 5. Website Pages & Key Features

### 1. Home Page (`index.html`)
- **Top Announcement Bar**: Displays shipping perks and project notes.
- **Navbar**: Clean links to all pages with a dynamic cart item badge.
- **Hero Section**: Bold "UNLEASH THE SPEED" heading, sports car visual, and "Shop Now" call to action.
- **Categories Section**: Quick portal boxes for Sports Cars, Supercars, Muscle Cars, and Monster Trucks.
- **Featured & Popular Cars**: Dynamically generated cards loaded from `products.js`.
- **Special Deal Banner**: 20% discount promotional strip.
- **Newsletter Subscription**: Basic email validation with confirmation alert.

### 2. Shop Page (`shop.html`)
- Displays **14 realistic Hot Wheels die-cast toy cars** with name, price in Indian Rupees (₹), original price, rating, and scale.
- **Live Search**: Filters cars instantly as you type letters in the search bar.
- **Category Filter Pills**: Click "Sports Cars", "Supercars", "Muscle Cars", or "Monster Trucks" to filter instantly.
- **Sorting Options**: Sort products by:
  - Price: Low to High
  - Price: High to Low
  - Most Popular First
- Responsive Bootstrap 12-column grid that automatically adjusts for mobile, tablet, and desktop screens.

### 3. Product Details Page (`product.html`)
- Reads the selected car ID from the URL (`product.html?id=2`) using JavaScript's `URLSearchParams`.
- Shows a large picture of the vehicle, title, category, price, and full description.
- Detailed specifications table: Scale (1:64), Series, Body Material, and Stock status.
- Quantity counter (`[-] [qty] [+]`) allowing users to choose how many cars to add to their cart.

### 4. Shopping Cart Page (`cart.html`)
- Displays all added products in an organized, easy-to-read table.
- Buttons to increase (`+`) or decrease (`-`) quantities in real time.
- Delete button to remove individual cars from the cart.
- Automatically calculates:
  - **Subtotal**: Sum of all items.
  - **Shipping Fee**: FREE for orders ₹999 or more; otherwise ₹99.
  - **Grand Total**: Final calculated amount.
- **Empty Cart View**: Shows a friendly message with an "Explore Shop" button if the cart is empty.
- **Simulated Checkout Button**: Prompts the user for their name and displays a simulated order confirmation alert with a randomly generated Order ID.

### 5. About Page (`about.html`)
- Explains the origin and purpose of Hot Wheels – Speed Shop.
- Short, original brand story about the excitement of toy cars, speed, and collecting since 1968.
- Highlights collector priorities: Authentic Die-Cast, Protective Packaging, and Fast Dispatch.
- Explains the first-year BCA project background.

### 6. Contact Page (`contact.html`)
- Contact cards with sample workshop address, phone number, and student email.
- Interactive contact form with input validation:
  - **Name**: Must be at least 3 characters.
  - **Email**: Must contain `@` and a period (`.`).
  - **Subject**: Must select an option from the dropdown.
  - **Message**: Must be at least 10 characters long.
- Displays a clean bootstrap alert upon successful submission.
- Includes a clear disclaimer that it is a front-end simulation and does not transmit data to a remote server.

---

## 🎓 6. College Viva Voce Questions & Answers

Here are the most common questions an external examiner or professor might ask during a BCA web development practical examination:

### Q1: What technologies did you use to build this project?
**Answer:**  
"I used HTML5 for structuring the web pages, CSS3 for custom racing theme styling, Bootstrap 5 via CDN for responsive layouts and the navbar, and Vanilla JavaScript for client-side interactivity, product search, category filtering, and shopping cart management."

### Q2: How does the shopping cart remember products after refreshing the page?
**Answer:**  
"The shopping cart uses the browser's native `localStorage` API. In JavaScript, when a user adds or removes a product, the cart array is converted into a string using `JSON.stringify()` and saved in `localStorage.setItem('speed_shop_cart', ...)`. When the page loads, `JSON.parse(localStorage.getItem('speed_shop_cart'))` retrieves the array back into memory."

### Q3: How does `product.html` know which specific car to display?
**Answer:**  
"We pass the car's unique ID through the URL as a query string (for example, `product.html?id=3`). On the product details page, our JavaScript reads this ID using `new URLSearchParams(window.location.search).get('id')` and finds the matching car from our `products` array in `products.js`."

### Q4: How is the live search feature implemented on the Shop page?
**Answer:**  
"We attach an `input` event listener to the search input field. Every time the user types a letter, JavaScript reads `e.target.value`, converts it to lowercase, and filters the `products` array using `Array.prototype.filter()` and `String.prototype.includes()`. It then re-renders the matching cards in the grid."

### Q5: Why did you choose Bootstrap 5 instead of writing 100% custom CSS?
**Answer:**  
"Bootstrap 5 provides a reliable, battle-tested 12-column responsive grid system and mobile-friendly hamburger navbar out of the box. By combining Bootstrap's grid utilities with our own custom `style.css` stylesheet, we achieved a custom Hot Wheels racing theme while ensuring the site works on mobile phones, tablets, and laptops."

### Q6: How did you validate the contact form?
**Answer:**  
"We handle the form's `submit` event using `e.preventDefault()` to stop the browser from reloading. We then check each field: ensuring the name is at least 3 characters, the email contains an `@` symbol and a dot, a subject is selected, and the message is at least 10 characters. If any test fails, an error message appears; if all pass, a green success alert is displayed."

### Q7: Does this website process real payments?
**Answer:**  
"No. This is a front-end academic project. The checkout process is completely simulated using JavaScript: it generates a random Order ID and clears the cart in `localStorage` to demonstrate the user flow without needing a real payment gateway or backend server."

---

## 📜 7. Academic Declaration
This project is an **original academic front-end web development project** created for first-year BCA evaluation. Hot Wheels brand names and car trademarks belong to **Mattel, Inc.** and are used solely for educational demonstration purposes.
