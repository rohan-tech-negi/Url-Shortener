import { createHmac, randomBytes } from "crypto";

export function hashedPasswordWithSalt(password){
    const salt = randomBytes(16).toString("hex");
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

      return{password: hashedPassword, salt}
}