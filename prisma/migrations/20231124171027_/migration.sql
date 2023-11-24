/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Likes" (
    "id" SERIAL NOT NULL,
    "usersId" UUID,
    "commentsId" UUID
);

-- CreateIndex
CREATE UNIQUE INDEX "Likes_id_key" ON "Likes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_commentsId_fkey" FOREIGN KEY ("commentsId") REFERENCES "Comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
