const allowRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Acceso denegado: permiso insuficiente" });
    }
    next();
  };
};

module.exports = allowRoles;
