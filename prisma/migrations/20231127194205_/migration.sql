/*
  Warnings:

  - You are about to alter the column `name` on the `Roles` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `email` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `username` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `password` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE "Roles" ALTER COLUMN "name" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "email" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "full_name" SET DATA TYPE VARCHAR(40),
ALTER COLUMN "username" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(30);
