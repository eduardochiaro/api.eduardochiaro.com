import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.headers["authorization"];
  //const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
