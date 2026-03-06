const adminMiddleware = (req, res, next) => {
  console.log("ADMIN MIDDLEWARE req.user:", req.user);

  if (req.user && req.user.role === "admin") {
    return next();
  }

  return res.status(403).json({
    message: "Admin access denied",
  });
};

export default adminMiddleware;