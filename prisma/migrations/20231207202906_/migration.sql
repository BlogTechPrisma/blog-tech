-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_likesId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_rolesId_fkey";

-- AlterTable
ALTER TABLE "Articles" ALTER COLUMN "likesId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "password" SET DATA TYPE TEXT,
ALTER COLUMN "rolesId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "Roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_likesId_fkey" FOREIGN KEY ("likesId") REFERENCES "Likes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
