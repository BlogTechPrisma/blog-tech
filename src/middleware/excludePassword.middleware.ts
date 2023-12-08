import { NextFunction } from "express";
import { prisma } from "../utils/prisma";


const deletePass = async (params: any, next: NextFunction) => {
    const result =  next(params);
    
    if (Array.isArray(result)) {
      return result.map(user => {
        delete user.password;
        return user;
      });
    }
    
    return result;
  };

  export default deletePass