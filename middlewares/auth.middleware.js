
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 * @returns 
 */

import { validationUserToken } from "../utils/token.js";

function authenticationMiddleware(req, res, next) {
  const authHeader = req.get("authorization"); // ✅ FIXED

  if (!authHeader) {
    return next();
  }

  if (!authHeader.startsWith("Bearer ")) {
    return res
      .status(400)
      .json({ error: "Authorization header must start with Bearer" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = validationUserToken(token);

    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

export default authenticationMiddleware;