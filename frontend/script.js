// 📦 FETCH PRODUCTS
fetch("http://localhost:5000/products")
  .then(res => res.json())
  .then(data => {

    let output = "";

    data.forEach(product => {

      const image = product.image || "https://via.placeholder.com/300";

      output += `
        <div class="product" onclick="goToProduct('${product._id}')">

          <img 
            src="${image}" 
            class="product-img" 
            onclick="event.stopPropagation(); openImage('${image}')"
            onerror="this.src='https://via.placeholder.com/300'"
          >

          <h3>${product.name}</h3>
          <p>₹${product.price}</p>

          <button onclick="event.stopPropagation(); addToCart('${product._id}')">
            Add to Cart 🛒
          </button>

        </div>
      `;
    });

    document.getElementById("products").innerHTML = output;

    // 🔥 update cart badge on load
    updateCartCount();
  })
  .catch(err => {
    console.log("Error loading products:", err);
    document.getElementById("products").innerHTML = "Failed to load products ❌";
  });


// 🛍️ GO TO PRODUCT PAGE
function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}


// 🛒 ADD TO CART (FINAL)
function addToCart(id) {

  if (!localStorage.getItem("token")) {
    showToast("Please login first 🔐");
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 🔥 fix old format
  if (cart.length && typeof cart[0] === "string") {
    cart = [];
  }

  let existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: id, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // 🔥 UPDATE BADGE
  updateCartCount();

  showToast("Added to cart 🛒");
}


// 🔢 CART COUNT BADGE (IMPORTANT)
function updateCartCount() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let count = 0;

  cart.forEach(item => {
    if (typeof item === "string") {
      count += 1;
    } else {
      count += item.qty;
    }
  });

  let el = document.getElementById("cartCount");
  if (el) el.innerText = count;
}


// 🔔 TOAST
function showToast(message) {

  let toast = document.createElement("div");
  toast.innerText = message;

  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.background = "#111827";
  toast.style.color = "white";
  toast.style.padding = "10px 15px";
  toast.style.borderRadius = "8px";
  toast.style.borderLeft = "4px solid #fbbf24";
  toast.style.zIndex = "999";

  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2000);
}


// 🖼️ IMAGE VIEW
function openImage(src) {
  document.getElementById("imageViewer").style.display = "flex";
  document.getElementById("viewerImg").src = src;
}

function closeImage() {
  document.getElementById("imageViewer").style.display = "none";
}