/*
  Warnings:

  - Added the required column `comment_text` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "comment_text" TEXT NOT NULL;
