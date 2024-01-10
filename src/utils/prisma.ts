import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// export const exclude = <User, Key extends keyof User>(
//   user: User[],
//   keys: Key[]
// ): Omit<User, Key> => {
//   return Object.fromEntries(
//     Object.entries(user as Object).filter(([key]) => !keys.includes(key as Key))
//   ) as Omit<User, Key>;
// };

export const exclude = <User, Key extends keyof User>(
    users: User[],
    keys: Key[]
  ): Omit<User, Key>[] => {
    return users.map(user => 
      Object.fromEntries(
        Object.entries(user as Object).filter(([key]) => !keys.includes(key as Key))
      ) as Omit<User, Key>
    );
  };