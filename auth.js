const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

module.exports = function (req, res, next) {

  // 🔐 Step 1: Get token from headers
  const token = req.headers.authorization;

  // ❌ No token
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // 🔐 Step 2: Verify token
    const decoded = jwt.verify(token, SECRET);

    // ✅ Step 3: Save user info
    req.user = decoded;

    // 👉 Allow next step (go to route)
    next();

  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};