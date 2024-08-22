const { verify } = require("jsonwebtoken");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const [type, token] = authorization.split(" ");
    const decoded = verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  next();
};

module.exports = auth;
