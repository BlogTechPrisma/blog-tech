-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('USER', 'AUTHOR', 'ADMIN');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "role" "Roles" NOT NULL DEFAULT 'USER';
