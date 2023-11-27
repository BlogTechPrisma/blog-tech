import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
const prisma = new PrismaClient();

async function main() {
  const role1 = await prisma.roles.create({
    data: {
      id: randomUUID(),
      name: "Editor",
      articles_creation: true,
      admin_privileges: false,
    },
  });
  
  const role2 = await prisma.roles.create({
    data: {
      id: randomUUID(),
      name: "Admin",
      articles_creation: true,
      admin_privileges: true,
    },
  });

  const user1 = await prisma.users.upsert({
    where: { email: "user2@example.com" },
    update: {},
    create: {
      id: randomUUID(),
      username: "EmmaY",
      full_name: "Emma Johnson",
      email: "user2@example.com",
      rolesId: role1.id,
      password: "password2", // remember to hash the password
    },
  });
  
  const user2 = await prisma.users.upsert({
    where: { email: "user3@example.com" },
    update: {},
    create: {
      id: randomUUID(),
      username: "AlexZ",
      full_name: "Alex Zhang",
      email: "user3@example.com",
      rolesId: role2.id,
      password: "password3", // remember to hash the password
    },
  });
  
  const comment1 = await prisma.comments.create({
    data: {
      id: randomUUID(),
      comment_text: "This is a great post!",
      usersId: user2.id,
    },
  });
  
  const comment2 = await prisma.comments.create({
    data: {
      id: randomUUID(),
      comment_text: "Interesting discussion!",
      usersId: user2.id,
    },  
  });
  

  
  
  const like1 = await prisma.likes.create({
    data: {
      usersId: user2.id,
      commentsId: comment1.id,
    },
  });
  
  const like2 = await prisma.likes.create({
    data: {
      usersId: user2.id,
      commentsId: comment2.id,
    },
  });
  console.log({ user1, user2 });
  console.log({ comment1, comment2 });
  console.log({like1, like2})
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
