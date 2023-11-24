import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.users.upsert({
    where: { email: "user1@example.com" },
    update: {},
    create: {
      id: "e549ebc2-8f0a-49d9-a2a1-db54e2bbfc5a",
      username: "GeorgeX",
      full_name: "George Da Silva",
      email: "user1@example.com",
      password: "password1", // remember to hash the password
    },
  });

  const user2 = await prisma.users.upsert({
    where: { email: "user2@example.com" },
    update: {},
    create: {
      id: "20fb3c63-d06d-4a18-9f41-d7f4c8ffd37d",
      username: "Larax",
      full_name: "Lara Da Silva",
      email: "user2@example.com",
      password: "password2", // remember to hash the password
    },
  });

  const comment1 = await prisma.comments.upsert({
    where: { id: "d9687965-cb79-4fcc-bd88-34e1ff1191dd" },
    update: {},
    create: {
      id: "d9687965-cb79-4fcc-bd88-34e1ff1191dd",
      userId: "e549ebc2-8f0a-49d9-a2a1-db54e2bbfc5a",
      comment_text: "Oi, tudo bem com vocês?",
    },
  });

  const comment2 = await prisma.comments.upsert({
    where: { id: "32da35c1-508d-47b7-8583-5879b75cab2e" },
    update: {},
    create: {
      id: "32da35c1-508d-47b7-8583-5879b75cab2e",
      userId: "20fb3c63-d06d-4a18-9f41-d7f4c8ffd37d",
      comment_text: "Oi, tudo bem com vocês?",
    },
  });

  const like1 = await prisma.likes.upsert({
    where: {id:1},
    update: {},
    create:{
      id: 1,
      usersId:"e549ebc2-8f0a-49d9-a2a1-db54e2bbfc5a",
      commentsId: "32da35c1-508d-47b7-8583-5879b75cab2e"
    }
  });

  const like2 = await prisma.likes.upsert({
    where: {id:2},
    update: {},
    create:{
      id: 2,
      usersId:"20fb3c63-d06d-4a18-9f41-d7f4c8ffd37d",
      commentsId: "32da35c1-508d-47b7-8583-5879b75cab2e"
    }
  })

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
