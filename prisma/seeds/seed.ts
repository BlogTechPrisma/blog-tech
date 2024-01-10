import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import * as bcrypt from "bcrypt";
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
            password: await bcrypt.hash("123456", 10)
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
            password: await bcrypt.hash("123456", 10)
        },
    });

    const article1 = await prisma.articles.create({
        data: {
            id: randomUUID(),
            content: "Funcionando",
            usersName: user1.username,
            usersId: user1.id,
        },
    });

    const article2 = await prisma.articles.create({
        data: {
            id: randomUUID(),
            content: "um dois 3 de oliveira 10",
            usersName: user2.username,
            usersId: user2.id,
        },
    });

    const comment1 = await prisma.comments.create({
        data: {
            id: randomUUID(),
            comment_text: "This is a great post!",
            usersId: user2.id,
            articlesId: article1.id,
        },
    });

    const comment2 = await prisma.comments.create({
        data: {
            id: randomUUID(),
            comment_text: "Interesting discussion!",
            usersId: user2.id,
            articlesId: article1.id,
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
    console.log({ like1, like2 });
    console.log({article1, article2})
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
