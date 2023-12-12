/*
  Warnings:

  - A unique constraint covering the columns `[usersId]` on the table `Articles` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_likesId_fkey";

-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_usersId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_articlesId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Articles_usersId_key" ON "Articles"("usersId");

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_articlesId_fkey" FOREIGN KEY ("articlesId") REFERENCES "Articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_likesId_fkey" FOREIGN KEY ("likesId") REFERENCES "Likes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
