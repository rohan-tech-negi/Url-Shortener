
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 * @returns 
 */

import { validationUserToken } from "../utils/token.js";



function authenticationMiddleware(req,res,next){
    const authHeader = req.headers('authorization');

    if(!authHeader){
        return next()
    }
    if(!authHeader.startsWith('Bearer'))
        return res.status(400).json({error:'Authorization header must start with this '})

    const [_, token] = authHeader.split(' ');

    const payload = validationUserToken(token)

    req.user = payload;
    next()
}

export default authenticationMiddleware