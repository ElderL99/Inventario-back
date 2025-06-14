const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const userId = decoded.user?.id 
      if (!userId) return res.status(401).json({ message: 'Token inválido (sin user.id)' })

      req.user = await User.findById(userId).select('-password');
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  } else {
    return res.status(401).json({ message: 'No autorizado' });
  }
};

module.exports = authMiddleware;
