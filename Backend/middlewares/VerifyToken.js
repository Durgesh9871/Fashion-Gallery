const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.secretKey, (err, user) => {
        if (err) res.status(403).send("Token is not valid!");
        req.user = user;
        next();
      });
    } else {
      return res.status(401).send("You are not authenticated!");
    }
  };

  const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).send("You are not alowed to do that!");
      }
    });
  };

module.exports={
    verifyToken,
    verifyTokenAndAuthorization
}