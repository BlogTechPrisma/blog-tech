import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const role1 = await prisma.roles.create({
    data: {
      id: "d6c67282-24db-4b8f-8e22-43e174c77d18",
      name: "Editor",
      articles_creation: true,
      admin_privileges: false,
    },
  });
  
  const role2 = await prisma.roles.create({
    data: {
      id: "f5c6b734-7362-471d-901c-9441c7d303a1",
      name: "Admin",
      articles_creation: true,
      admin_privileges: true,
    },
  });

  const user2 = await prisma.users.upsert({
    where: { email: "user2@example.com" },
    update: {},
    create: {
      id: "f8b0f9bf-1b71-4c92-89fe-2a7dfe69c33d",
      username: "EmmaY",
      full_name: "Emma Johnson",
      email: "user2@example.com",
      rolesId: role1.id,
      password: "password2", // remember to hash the password
    },
  });
  
  const user3 = await prisma.users.upsert({
    where: { email: "user3@example.com" },
    update: {},
    create: {
      id: "5b28ec34-90ec-4e90-a647-6a57e10fb7b2",
      username: "AlexZ",
      full_name: "Alex Zhang",
      email: "user3@example.com",
      rolesId: role2.id,
      password: "password3", // remember to hash the password
    },
  });
  
  const comment1 = await prisma.comments.create({
    data: {
      id: "82e7e7c8-0e42-4d65-a4c9-81a3467e7d27",
      comment_text: "This is a great post!",
      usersId: user2.id,
    },
  });
  
  const comment2 = await prisma.comments.create({
    data: {
      id: "c480128c-7e8c-4e6b-9b1b-32e28cfcf029",
      comment_text: "Interesting discussion!",
      usersId: user3.id,
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
      usersId: user3.id,
      commentsId: comment2.id,
    },
  });
  console.log({ user2, user3 });
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
