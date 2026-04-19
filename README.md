🛒 MyFashionStore – Full Stack E-commerce Website

## 🚀 Overview

MyFashionStore is a full-stack e-commerce web application built during my internship at CodeAlpha.

It allows users to register, browse products, add items to cart, and place orders with a clean and premium UI.


## ✨ Features

* 🔐 User Registration & Login (JWT Authentication)
* 🛍️ Product Listing Page
* 🔎 Product Details Page
* 🛒 Add to Cart (with quantity support)
* ❌ Remove items from cart
* 🔢 Cart item count badge
* 💳 Order placement system
* 🎨 Modern premium UI design

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

## 📁 Project Structure

CodeAlpha_EcommerceStore/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── cart.html
│   ├── product.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   │
│   └── middleware/
│       └── auth.js
│
├── package.json
└── package-lock.json

## ▶️ How to Run the Project

### 1. Clone the repository


git clone https://github.com/yourusername/CodeAlpha_EcommerceStore.git


### 2. Navigate to backend

cd backend


### 3. Install dependencies

npm install


### 4. Start the server

npx nodemon server.js

### 5. Open frontend

Open `frontend/index.html` in your browser


## 🌐 API Endpoints

* GET `/products` → Fetch all products
* POST `/auth/register` → Register user
* POST `/auth/login` → Login user
* POST `/orders` → Place order


## 💡 Future Improvements

* 💳 Payment integration (Razorpay / Stripe)
* ❤️ Wishlist feature
* 📦 Order history page
* 👨‍💼 Admin dashboard
* 📱 Fully responsive mobile UI


## 📸 Screenshots

(Add screenshots here after uploading images to repo)


## 🙌 Acknowledgement

This project was built as part of my internship at **CodeAlpha**.



## 👩‍💻 Author

**Vanshika Dutt Srivastava**
Full Stack Developer 🚀


