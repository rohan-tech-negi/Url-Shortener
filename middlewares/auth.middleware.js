
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 * @returns 
 */

import { validationUserToken } from "../utils/token.js";

function authenticationMiddleware(req, res, next) {
  const authHeader = req.get("authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  if (!authHeader.startsWith("Bearer ")) {
    return res
      .status(400)
      .json({ error: "Authorization header must start with Bearer" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = validationUserToken(token);
    

    req.user = payload; // MUST contain id
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

export default authenticationMiddleware;
